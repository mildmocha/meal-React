import React from 'react'
import classes from "./Header.module.css";
import mealsImg from "../../assert/meals2.jpg";
import HeaderCartButton from './HeaderCartButton';
//public에 놓고 일반 웹페이지에서 이미지 쓰듯이 사용할 수도 있음

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onclick={props.onShowCart} />
      </header> 
      <div className={classes["main-image"]}>
        {/* main-image 클라스는 안에 -가 있어서 .을 못 씀 */}
        <img src={mealsImg} alt="meals" />
      </div>


    </>
  )
}

export default Header;