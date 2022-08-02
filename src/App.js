import React, {useEffect, useReducer} from 'react';
import './App.scss';
import dataContext from './context';
import { Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';
import Main from './components/Main';
import { jsondata } from './data';

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'ADD':
      const obj = state.find(item=> item.itemname === action.payload.itemname);
      obj.count = obj.count ? obj.count + 1 : 1;
      const filtered = state.filter(item => {
        if(item.itemname === action.payload.itemname){
          return obj;
        } else{
          return item;
        }
      });
      return filtered;
    case 'REMOVE': 
      const removeObj = state.find(item=> item.itemname === action.payload.itemname);
      removeObj.count = removeObj.count > 0 ? removeObj.count - 1 : delete removeObj.count;
      const removefiltered = state.filter(item => {
        if(item.itemname === action.payload.itemname){
          return removeObj;
        } else{
          return item;
        }
      });
      return removefiltered;
    default:
      return state;
  }
}

function App() {

  const [data, dataDispatch] = useReducer(dataReducer, []);

  useEffect(() => {
    dataDispatch({ type: 'SET', payload: jsondata})
  }, []);

  return (
    <div className="App">
      <dataContext.Provider value={{state: data, action: dataDispatch}}>
        <Switch>
          <Route path="/" exact component={Main}></Route>
          <Route path="/checkout" exact component={Checkout}></Route>
        </Switch>
      </dataContext.Provider>
    </div>
  );
}

export default App;
