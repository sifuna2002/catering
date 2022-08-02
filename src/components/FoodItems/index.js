import React, {useState} from 'react';
import './index.scss';
import dataContext from '../../context';
import Counter from '../Counter';
import { getTime } from '../../utils';

const FoodItems = ({filtered, addItem, filter}) => {

  const [isAssending, setIsAssending] = useState(true);

  const sort = () =>{
    filter(isAssending);
    setIsAssending(!isAssending);
  }

  return (
    <div className="food-container">
      <div className="sort-by" onClick={sort}>
        <span className="sort'"> Sort by Price</span>
        <img src="./icon_filter.png" alt="" className="icon icon-sort"/>
      </div>
     <ul className="food-items">
       {
        filtered && filtered.map((item, index)=> {
           return (
             <li className="item" key={index}>
               <div className="details">
                 <span className="title">{item.itemname}</span>
                 <span className="sub-title">Rs. {item.price}</span>
               </div>
                {
                  item.count && item.count > 0 ? 
                  <Counter item={item}/>
                  :
                  <button className={getTime() ? 'btn-primary disabled' : 'btn-primary' } onClick={()=>addItem(item)} disabled={getTime()}>Add</button>
                }
             </li>
           )
         })
       }
     </ul>
    </div>
  )
}

export default FoodItems
