import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import CustomButton from '../../components/customButton/CustomButton'
import '../forgetPassword/ForgetPassword.css'
import CustomInput from '../../components/customInputs/CustomInput'

function InputOTP() {
  return (
    <div className='pageContainer'>
            <NavBar/>
        <form action="" id='form'>
            <div>
                <p>Enter OTP</p>
                <CustomInput
                        id='Email'
                        />
                <CustomButton
                value='Enter'
                id='searchBtn'/>
            </div>
            </form>
    </div>
  )
}

export default InputOTP