import React from 'react'
import classes from './Input.module.css'

const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={props.propsRef} {...props.input}/>
    </div>
  )
}

export default Input
//forwardRef - 전달받은 ref 어트리뷰트를 하부 트리 내의 다른 
//컴포넌트로 전달 할 때 함수부분을 감싸서 사용