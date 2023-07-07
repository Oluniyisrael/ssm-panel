import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import CustomButton from '../../components/customButton/CustomButton'
import '../forgetPassword/ForgetPassword.css'
import CustomInput from '../../components/customInputs/CustomInput'
import Search from '../../assets/images/icon/svgs/search_FILL0_wght400_GRAD0_opsz48.svg'

function InputOTP() {
  return (
    <div className='pageContainer'>
            <NavBar/>
        <form action="" id='form'>
            <div className='container'>
                <p>Enter OTP</p>
                <CustomInput
                        id='Email'
                        />
                <CustomButton
                value={Search}
                id='searchBtn'/>
            </div>
            </form>
    </div>
  )
}

export default InputOTP