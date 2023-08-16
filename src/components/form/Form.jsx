import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Form.css'
import CustomInput from '../customInputs/CustomInput'
import CustomButton from '../customButton/CustomButton'

function Form() {
  const [inputAi, setInputAi] = useState('');
  const [inputBi, setInputBi] = useState('');
  window.history.pushState(null, document.title, window.location.href);
   var database = [
      
        {
            username: 'Isaac',
            password: '1234567890'
        },
        {
          username:'isaac',
          password:'1234567890'
        }
    ];
    // console.log(inputAi+' '+inputBi)
    function isCorrect(){
        for (let i = 0; i < database.length; i++) {
            if (database[i].username.toLowerCase === inputAi.toLowerCase && database[i].password === inputBi) {
                return true;
            } 
        }
        return false;
    }
    function signIn() {
        if (isCorrect() === true) {
            alert("Good to go!")
        }
        else{
            alert('Going nowhere')
        }
    }
    var enterSubmit = (e) =>{
        if(e.key === 'Enter'){
            signIn()
        }
        else{ return }
     }
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
              onchange={(e)=>{(setInputAi(e.target.value))}}
                />
          </div>

          <div className='inputCont'>
              <p>Password</p>
        <CustomInput
        type='password'
        id='password'
        name= 'password'
        onchange={(e)=>{(setInputBi(e.target.value))
          enterSubmit(e)}}
          onkeydown = {(e)=>{(enterSubmit(e))}}
          
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

        {/* <Link to='/user'> */}

        <CustomButton value='Submit' 
        // onClick={()=>{isCorrect(database,username,password,setIsLoggedIn,isLoggedIn)}}
        onClick={()=>{signIn()}}
        id='submitBtn'/>
        {/* </Link> */}
        <div>Dont have an account? 
          <Link to='/signup'>Sign up</Link>
          </div>


    </form> 
  )
}

export default Form