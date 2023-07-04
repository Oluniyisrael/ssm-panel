import React from 'react'
import './LandingPage.css'
// import SidePage from '../../components/sidePage/SidePage'
import Login from '../../components/loginPage/Login'
import NavBar from '../../components/navBar/NavBar'
import Form from '../../components/form/Form'

function LandingPage() {
  return (
    <div className='LandingPageCont'>
          <NavBar/>
        <Login>
          <Form/>
        </Login>
    </div>
  )
}

export default LandingPage