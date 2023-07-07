import React from 'react'
import logo from '../../assets/images/jps/IMG-20230705-WA0007.51e16a23b37c3fb89e9e-removebg-preview.png'
import './NavBar.css'
import { Link } from "react-router-dom";
import CustomButton from '../customButton/CustomButton';


function NavBar() {
  function toggleSideBar(){
    // document.getElementsByClassName('userSideBar')[0].classList.toggle('normal')
    // console.log(document.getElementsByClassName('userSideBar')[0].classList.toggle('normal'))
    }
  return (
    <nav>
        <CustomButton
        value = '☰' 
        id='hamburger'
        onClick={()=>toggleSideBar()}
        />
        <ul>
        <li>
          <Link to={''}>
              <img src={logo} alt="logo" id='logo'/> 
          </Link>
        </li>
        <li>
          <Link to={''}> Tasks</Link>
        </li>
        <li>
          <Link to={''}> History</Link>
        </li>
        <li>
          <Link to={''}> Profile</Link>
        </li>
        </ul>
    </nav>
  )
}

export default NavBar