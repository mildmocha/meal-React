import React from 'react'


const Input = props => {
  return (
    <div>
      <label htmlFor={props.input}>
        {props.label} 
      </label>
      <Input {...props.input}/>

    </div>

  )
}

export default Input