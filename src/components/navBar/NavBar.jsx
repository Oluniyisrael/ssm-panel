import React from 'react'
import logo from '../../assets/images/jps/IMG-20230705-WA0007.51e16a23b37c3fb89e9e-removebg-preview.png'
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