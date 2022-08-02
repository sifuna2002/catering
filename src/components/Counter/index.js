import React, {useContext} from 'react';
import dataContext from '../../context';
import './index.scss';

const Counter = ({item}) => {

  const {state, action} = useContext(dataContext);
     
  const addItem=() =>{
    action({type: 'ADD', payload: item})
  }

  const removeItem = () =>{
    action({type: 'REMOVE', payload: item})
  }

  return (
       <div className="counter">
          <button className="count" onClick={addItem}>+</button>
          <span className="text">{item.count}</span>
          <button className="count" onClick={removeItem}>-</button>
        </div> 
  
  )
}

export default Counter
