import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHigh, setBtnIsHigh] = useState(false);  //버튼 상태(애니메이션 적용여부)
  const {items} = cartCtx; 

  useEffect(()=>{ 
    if(items.length===0){ return }

    setBtnIsHigh(true);

    const timer = setTimeout(()=>{
      setBtnIsHigh(false)
    },300)

    //사이드이펙트 정리, 클립업함수
    return ()=>{
      clearTimeout(timer);
    }
  }, [items])
  //컨텍스트에 배열이 바뀔때 작동

const btnClass = `${classes.button} ${btnIsHigh ? classes.bump : ''}`


  //const numberOfCartIntems = cartCtx.items.length; -아이템숫자X -> 아이템 안의 amount를 합해줘야
//배열.reduce((합해진값, 밸류)=>{ 합해진값 + 밸류 }, 합해진값의초기값)
  const numberOfCartIntems = items.reduce( (sum, item)=>{
    return sum += item.amount
  },0)

  return (
    <button className={btnClass} onClick={props.onclick} >
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartIntems}</span>
    </button>
  )
}

export default HeaderCartButton