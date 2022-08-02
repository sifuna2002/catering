import React, { useContext, useState, useEffect } from 'react';
import Header from '../Header'
import FoodItems from '../FoodItems'
import AddedItems from '../AddedItems/Index'
import dataContext from '../../context';
import _ from 'underscore';
import Navbar from '../Navbar';

const Main = () => {

  const { state, action } = useContext(dataContext);
  const [searched, setSearched] = useState([]);
  const [isSearched, setisSearched] = useState(false);

  const searchChangeHandler = (event) => {
    var str = event.target.value;
    var search = new RegExp(str, 'i');
    let b = state.filter(item => search.test(item.itemname));
    if (str !== '') {
      setisSearched(true);
      setSearched(b);
    } else {
      setSearched(state);
      setisSearched(false);
    }
  }

  const addItem = (item) => {
    action({ type: 'ADD', payload: item })
  }

  const filter = (isAssending) => {
    if(isSearched) {
      if(isAssending) {
        const a = _.sortBy(searched, 'price');
        setSearched(a);
      } else {
        const a = _.sortBy(searched, 'price').reverse();
        setSearched(a)
      }
      return;
    }

    if(isAssending) {
      const a = _.sortBy(state, 'price');
      action({type: 'SET', payload: a});
    } else {
      const a = _.sortBy(state, 'price').reverse();
      action({type: 'SET', payload: a});
    }
  }

  return (
    <React.Fragment>
      <Navbar />
      <Header searchChangeHandler={searchChangeHandler} />
      <FoodItems filter={filter} filtered={ isSearched > 0 ? searched : state } addItem={addItem} />
      <AddedItems data={state} />
    </React.Fragment>
  )
}

export default Main
