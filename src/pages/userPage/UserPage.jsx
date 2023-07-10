import React from 'react'
import NavBar from '../../components/navBar/NavBar'
import CustomSideBar from '../../components/customSideBar/CustomSideBar'
import PageHolder from '../../components/pageHolder/PageHolder'
import './UserPage.css'
import ChatBot from '../../components/chatBot/ChatBot'
import { FaCrown, FaSearch, FaToolbox } from 'react-icons/fa'
import CustomButton from '../../components/customButton/CustomButton'
import CustomInput from '../../components/customInputs/CustomInput'
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
              <div id='secondRow'>
                <div className='firstDiv'>
                  <div className='buttonLine'>
                  <CustomButton value='New Order'/>
                  <CustomButton value='Mass Order'/>
                  <CustomButton value='Auto Likes/Views'/>
                    
                  </div>
                  <div id='searchCont'>
                  <CustomInput type='text' /><button id='search'>
                    <FaSearch/>
                  </button>
                  </div>
                  <div>
                  icons
                </div>
                <div>
                  <div>
                Category
                  <select name="" id="">
                  <option value="1">Something</option>
                  <option value="2">Something</option>
                  <option value="3">Something</option>
                  <option value="4">Something</option>
                  <option value="5">Something</option>
                  <option value="6">Something</option>
                  </select>
                  </div>
                  <div>
                      Service
                  <select name="" id="">
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  </select>
                  </div>
                 
                  <div id='searchCont'>
                  <CustomInput type='text' />
                  </div>
                  Category
                  <select name="" id="">
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  <option value="1">Something</option>
                  </select>
                </div>
                
                </div>
                <div className='secondDiv'>
                  <div  className='buttonLine'>
                     <CustomButton value='Service Description'/>
                  <CustomButton value='News & Updates'/>
                  </div>
                  <div>
                  <div className='divs'>
                      <div className='Secdiv'>
                          <p>Min/Max Quantity</p>
                          <p>10/50000</p>
                      </div>
                      <div  className='Secdiv'>
                      <p>Quality Examples</p>
                          <p>N/A</p>
                      </div>
                      <div className='Secdiv'>
                      <p>Price Per 1000</p>
                          <p>0.2375</p>
                      </div>
                      <div className='Secdiv'>
                      <p>Speed</p>
                          <p>st-6 mins, sp/k -56 mins</p>
                      </div>
                </div>
                <div className="Pridiv">
                  <p>Something</p>
                  <p>Another thing</p>
                </div>
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