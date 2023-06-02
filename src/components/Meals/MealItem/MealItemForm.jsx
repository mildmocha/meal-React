import React, { useRef } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = (props) => {
  //ref를 통해서 입력된 값을 받아옴(특정DOM을 선택할때 사용)
  const amountInputRef= useRef();  

  const submitHandler = (e) => {
    e.preventDefault();
    const enterdAmount = amountInputRef.current.value;
    const enterdAmountNumber = +enterdAmount; // + 숫자열로 바꿔줌 
    
    
  
//유효성검사
//if( enterdAmount.trim().length===0 || enterdAmount < 1 || enterdAmount > 5) {   return ;}
props.onAddToCart(enterdAmountNumber);


    //수량을 onAddToCart의 인자값으로 넘김 

}
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" propsRef={amountInputRef} 
        input={{
          id:"amount_"+props.id,
          type:"number",
          min:"1",
          max:"5",
          defaultValue:"1",
          step:"1",
    }} />
    
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm