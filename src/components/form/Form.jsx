import React, { useState } from 'react'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'
import './Form.css'
import database from '../../assets/jsons/database.json'
import isCorrect from '../functions/isCorrect/IsCorrect'

function Form() {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')

  return (
    <form action="" id='form'>
        <p id='banner'>Welcome!! Please Input your username and password</p>

        <CustomInput 
        type='text'
        id='username'
        placeholder = 'Username'
        name= 'username'
        onchange={(e)=>{setUserName(e.target.value)}}/>

        <CustomInput
        type='password'
        id='password'
        placeholder = 'Password'
        name= 'password'
        onchange={(e)=>{setPassword(e.target.value)}}/>
        
        <CustomButton value='Submit' onClick={()=>{isCorrect(database,username,password)}} id='submitBtn'/>
    </form> 
  )
}

export default Form