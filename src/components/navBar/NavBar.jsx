import React from 'react'
import logo from '../../assets/images/jps/logoForNav.jpg'
import './NavBar.css'
import { Link } from "react-router-dom";


function NavBar() {
  return (
    <nav>
        <img src={logo} alt="logo" id='logo'/>
        <ul>
        <li>
          <Link to={''}> Home</Link>
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