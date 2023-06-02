import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;

  //앞의 $는 문자열. ${props.price}외부에서 가져온 props
  //toFixed(n)  -소수점 n번째 자리까지만 출력

  //컨텍스트에 전달하는 함수
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      amount: amount,
      price: props.price,
      name: props.name,
      id: props.id,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
