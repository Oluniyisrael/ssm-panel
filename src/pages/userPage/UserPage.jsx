import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import CustomSideBar from '../../components/customSideBar/CustomSideBar'
import PageHolder from '../../components/pageHolder/PageHolder'
import './UserPage.css'
function UserPage() {

  
  return (
    <div>
        <NavBar/>
        <CustomSideBar/>      
        <PageHolder id='userPage'>
            
        </PageHolder>
    </div>
  )
}

export default UserPage