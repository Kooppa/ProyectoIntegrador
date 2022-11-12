import React from 'react'

export const ButtonsItem = (props) => {
    console.log(props)
  return (
        <>
                <td><button 
                onClick={props.btn1}
                >Update</button></td>
                <td><button 
                onClick={props.btn2}
                >Delete</button></td>
            
        </>
            
  )
}
export default ButtonsItem