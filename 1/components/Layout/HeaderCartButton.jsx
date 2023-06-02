import React from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = () => {
  return (
   <button className={classes.button}>
    <span className={classes.icon}><CartIcon/></span>
    <span >your cart</span>
    <span className={classes.badge}>3</span>

   </button>
  )
}

export default HeaderCartButton