import React, { useState } from 'react'
import './CustomSideBar.css'
import CustomButton from '../customButton/CustomButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/jps/IMG-20230705-WA0007.51e16a23b37c3fb89e9e-removebg-preview.png'

function CustomSideBar() {
  // function toggleSideBar(){
  // var sideBar = document.getElementsByClassName('userSideBar');
  // sideBar[0].classList.toggle('normal')
  // }

  return (
<nav className="userSideBar" >
            <div id="sideBarimgc">
              <img src={logo} alt="..."/>
              <div id="hamburgerCont">
                <CustomButton
                value = '☰' 
                id='hamburger'/>
              </div>
              
            </div>
            
            <ul className="list">
              <li className="li"><Link></Link></li>
              <li className="li"> <Link></Link></li>
              <li className="li"><Link></Link></li>
            </ul>
          </nav>
            )
}

export default CustomSideBar