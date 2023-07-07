// import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'
// import database from '../../assets/jsons/database.json'
// import isCorrect from '../functions/isCorrect/IsCorrect'


function Form() {
  // const [username,setUserName] = useState('')
  // const [password,setPassword] = useState('')
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
              // onchange={(e)=>{
              //   setUserName(e.target.value)}}
                />
          </div>

          <div className='inputCont'>
              <p>Password</p>
        <CustomInput
        type='password'
        id='password'
        name= 'password'
        // onchange={(e)=>{setPassword(e.target.value)}}
        />
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

        <Link to='/user'>

        <CustomButton value='Submit' 
        // onClick={()=>{isCorrect(database,username,password,setIsLoggedIn,isLoggedIn)}}
        id='submitBtn'/>
        </Link>
        <div>Dont have an account? 
          <Link to='/signup'>Sign up</Link>
          </div>


    </form> 
  )
}

export default Form