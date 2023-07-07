import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import CustomSideBar from '../../components/customSideBar/CustomSideBar'
import PageHolder from '../../components/pageHolder/PageHolder'
import './UserPage.css'
import ChatBot from '../../components/chatBot/ChatBot'
import { FaCrown, FaToolbox } from 'react-icons/fa'
function UserPage() {

  
  return (
    <div>
        <NavBar/>
        <CustomSideBar/>      
        <PageHolder id='userPage'>
            <PageHolder id='overlay'>
              <div id='' className='containerRow'>
                  <div className='firstOverlay' id='overFirst'>
                    <h1>
                      Lorem, ipsum.
                    </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem velit sapiente quidem nam expedita reiciendis commodi quaerat possimus doloribus dolor?
                  </p>
                  </div>
                  <div className='diver'>
                      <div className='firstOverlay'>
                      <p className='Faicon'><FaToolbox/></p>
                      <p className='overlayChild'>Last Month Deposit</p>
                      <p className='overlayChild red'>0</p>
                      </div>
                      <div className='firstOverlay'>
                      <p className='Faicon'><FaCrown/></p>
                      <p className='overlayChild'>Account Status</p>
                      <p className='overlayChild red'>Newbie</p>
                      </div>
                      <div className='firstOverlay'>
                      <p className='Faicon'><FaToolbox/></p>
                      <p className='overlayChild'>Last Month Deposit</p>
                      </div>
                  </div>
              </div>
            </PageHolder>
        </PageHolder>
        <ChatBot/>
    </div>
  )
}

export default UserPage