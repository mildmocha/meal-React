import React from 'react'
import classes from "./MealItem.module.css"; 
import MealItemForm from './MealItemForm';


const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  //앞의 $는 문자열. ${props.price}외부에서 가져온 props
  //toFixed(n)  -소수점 n번째 자리까지만 출력

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>  
      <div><MealItemForm  id={props.id}/></div>    

    </li>
  )
}

export default MealItem