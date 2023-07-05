import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'
import database from '../../assets/jsons/database.json'
import isCorrect from '../functions/isCorrect/IsCorrect'


function Form(props) {
  const [username,setUserName] = useState('')
  const [password,setPassword] = useState('')
 const isLoggedIn = props.isLoggedIn
 const setIsLoggedIn = props.setIsLoggedIn
 if(isCorrect === true){
  setIsLoggedIn(true)
  console.log('true')
 }
 console.log(isCorrect === true)
 
  return (
    <form action="" id='form'>
        <p id='banner'>Welcome!! Please Input your username and password</p>

        <div className='disFlex'>
          <div className='inputCont'>
              <p>Username</p>
              <CustomInput 
              type='text'
              id='username'
              name= 'username'
              onchange={(e)=>{setUserName(e.target.value)}}/>
          </div>

          <div className='inputCont'>
              <p>Password</p>
        <CustomInput
        type='password'
        id='password'
        name= 'password'
        onchange={(e)=>{setPassword(e.target.value)}}/>
        </div>
          
        </div>
        <div className='disFlex'>
        <div>
          <input type="checkbox" /> Remember me
        </div>
        <div>
        <Link to={'forgotpassword'}> Forgotten Password</Link>
                </div>
        </div>
        
        <CustomButton value='Submit' onClick={()=>{isCorrect(database,username,password,setIsLoggedIn,isLoggedIn)}} id='submitBtn'/>
    </form> 
  )
}

export default Form