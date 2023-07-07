import React from 'react'
import './SignUp.css'
// import SidePage from '../../components/sidePage/SidePage'
import NavBar from '../../components/navBar/NavBar'
import CustomInput from '../../components/customInputs/CustomInput'
import CustomButton from '../../components/customButton/CustomButton'
function SignUp() {
  return (
    <div className='pageContainer'>
            <NavBar/>
        <form action="" id='form'>
            <div className='FormContainer'>
                <p>Please fill out the form</p>
                <CustomInput
                        id='name'
                        placeholder='Full name'
                        /><CustomInput
                        id='username'
                        placeholder='Username'
                        /><CustomInput
                        id='Email'
                        placeholder='Email'
                        /><CustomInput
                        id='password'
                        placeholder='password'
                        type='password'
                        /><CustomInput
                        id='password2'
                        placeholder='confirmpassord'
                        type='password'
                        /><CustomInput
                        id='Email'
                        placeholder='Username'
                        />
                <CustomButton
                value='Enter'
                id='searchBtn'/>
            </div>
            </form>
    </div>
  )
}

export default SignUp