import React from 'react'
import CustomInput from '../../components/customInputs/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
import './ForgetPassword.css'
import NavBar from '../../components/navBar/NavBar'

function ForgetPassword() {
  return (
    <div className='pageContainer'>
        <NavBar/>
        <form action="" id='form'>
            <div>
                <p>Enter your email or username or phone number </p>
                <CustomInput
                        id='Email'
                        />
                <CustomButton
                value='Search'
                id='searchBtn'
                onClick={()=>{window.document.location += '/inputOTP'}}/>
            </div>
        </form>
    </div>
  )
}

export default ForgetPassword