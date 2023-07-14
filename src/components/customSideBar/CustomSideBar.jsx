import React from 'react'
import './CustomSideBar.css'
import CustomButton from '../customButton/CustomButton'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/jps/IMG-20230705-WA0007.51e16a23b37c3fb89e9e-removebg-preview.png'
import { FaCartPlus, FaChartArea, FaCode, FaCoins, FaDollarSign, FaIdCard, FaShoppingBag, FaToolbox, FaUser } from 'react-icons/fa'

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
                <li className="li"><Link className='sideTabs'> <FaUser className='faS'/> User</Link></li>
                <li className="li"> <Link className='sideTabs'><FaIdCard className='faS'/>Balance</Link></li>
                Menus
                <li className="li"> <Link className='sideTabs'><FaChartArea className='faS'/>Dashboard</Link></li>
                <li className="li"> <Link className='sideTabs'><FaCartPlus className='faS'/> New Order</Link></li>
                <li className="li"> <Link className='sideTabs'><FaToolbox className='faS'/>Services</Link></li>
                <li className="li"> <Link className='sideTabs'><FaShoppingBag className='faS'/>Orders</Link></li>
                <li className="li"> <Link className='sideTabs'><FaDollarSign className='faS'/>Add Fund</Link></li>
                <li className="li"> <Link className='sideTabs'><FaCode className='faS'/>Api</Link></li>
                <li className="li"> <Link className='sideTabs'><FaCoins className='faS'/>Make Money</Link></li>
              </ul>
          </nav>
            )
}

export default CustomSideBar