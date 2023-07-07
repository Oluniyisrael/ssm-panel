import React from 'react'
import './CustomSideBar.css'
import CustomButton from '../customButton/CustomButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/jps/IMG-20230705-WA0007.51e16a23b37c3fb89e9e-removebg-preview.png'

function CustomSideBar() {

  function toggleSideBar(){
    // document.getElementsByClassName('userSideBar')[0].classList.toggle('normal')
    console.log(document.getElementsByClassName('userSideBar')[0].classList.toggle('normal'))
    }
  return (
          <nav className="userSideBar" >
            <CustomButton
        value = '☰' 
        id='hamburger'
        onClick={()=>toggleSideBar()}
        className='abs'
        />
              <div id="sideBarimgc">
                <img src={logo} alt="..."/>
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