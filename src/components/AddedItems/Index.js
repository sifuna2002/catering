import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './index.scss';



const AddedItems = ({data}) => {
  
  const [selectedItems, setSelectedItem] = useState([]);
  const [total, settotal] = useState(0)

  useEffect(() => {
    const newarr = data.filter(item=> item.count && item.count > 0 );
    setSelectedItem(newarr);
  }, [data])

  useEffect(() => {
    var sum = selectedItems.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.price * currentValue.count;
    }, 0)
    settotal(sum);
  }, [selectedItems]);


  return (
    <div className="added-items">
      <ul className="selected-items">  
        {
          selectedItems.map((item, index)=> {
            return(
              <li className="item" key={index}>
                {`${item.count} X ${item.itemname}`}
              </li>
            )
          })
        }
      </ul>
      {
        total > 0 &&
        <div className="right">
          <div className="title">{`Total Rs. ${total}`} </div>
          <Link className="checkout" to="/checkout">
            <button className="btn-link">Checkout</button>
          </Link>
        </div>
      }
    </div>
  )
}

export default AddedItems
