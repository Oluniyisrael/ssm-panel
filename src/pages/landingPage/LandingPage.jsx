import React from 'react'
import './LandingPage.css'
// import SidePage from '../../components/sidePage/SidePage'
import Login from '../../components/loginPage/Login'
import NavBar from '../../components/navBar/NavBar'
import Form from '../../components/form/Form'

function LandingPage(props) {
  return (
    <div className='LandingPageCont'>
          <NavBar/>
        <Login>
          <Form
          setIsLoggedIn= {props.setIsLoggedIn}
          isLoggedIn = {props.isLoggedIn}/>
        </Login>
    </div>
  )
}

export default LandingPage