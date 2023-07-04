import React from 'react'
import './CustomButton.css'

function CustomButton(props) {
  return (
    <input type="button" value={props.value} onClick={props.onClick} id={props.id}  />
    )
}

export default CustomButton