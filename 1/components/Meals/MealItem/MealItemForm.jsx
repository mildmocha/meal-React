import React from 'react'
import Input from '../../UI/Input'


const MealItemForm = (props) => {
  return (
    <form>
      <Input label="Amount" 
        input={{
          id:"Amount_"+props.id,
          type:"number",
          min:"1",
          max:"5",
          defaultValue:"1",
          step:"1",
    }} />
    
      <button>+Add</button>
    </form>
  )
}

export default MealItemForm