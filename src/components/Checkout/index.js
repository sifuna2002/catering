import React, { useEffect, useState, useContext } from 'react';
import './index.scss';
import Counter from '../Counter';
import {getDate} from '../../utils';
import dataContext from '../../context';


const Checkout = () => {

  let total = 0;
   
  const {state, action} = useContext(dataContext)

  const [selected, setstate] = useState([])

  useEffect(() => {
    const newarr = state.filter(item => item.count && item.count > 0);
    setstate(newarr);
  }, [state])

  return (
    selected.length > 0 ?
      <div className="checkout">
        <div className="head">
          <h4>Buffet</h4>
          <div className="title">{
            getDate()
          }</div>
        </div>
        <ul>
          {
            selected.map((item, index) => {
              total = total + (parseInt(item.count) * parseInt(item.price))
              return (
                <li key={index}>
                  <div className="top">
                    <div className ="title">{item.itemname}</div>
                    <Counter item={item}/>
                  </div>
                  <div className="bottom">
                    <div className ="title">{`${item.count} X ${item.price}`}</div>
                    <div className="total-price">Rs. {(parseInt(item.count) * parseInt(item.price))}</div>
                  </div>
                </li>
              )
            })
          }
          <li>
          <div className="top">
                    <div className ="title">Sub Total</div>
                   <div className="right">{total}</div>
                  </div>
                  <div className="bottom">
                    <div className ="title">Tax</div>
                    <div className="total-price">0</div>
                  </div>
          </li>
          <li>
          <div className="top">
                    <div className ="title">Grand Total</div>
                   <div className="right">{total}</div>
                  </div>
                 
          </li>
          <li>
          <div className="top">
                  <button className="btn-link right">Place Order</button>
                  </div>
                 
          </li>
        </ul>
      </div>
      : ""
  )
}

export default Checkout
