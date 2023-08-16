import React from 'react'
import './CustomInput.css'

function CustomInput(props) {
  return (
    <input type={props.type} name={props.name} id={props.id} className={props.className} placeholder={props.placeholder} onChange={props.onchange} onKeyDown={props.onkeydown}/>
  )
}

export default CustomInput