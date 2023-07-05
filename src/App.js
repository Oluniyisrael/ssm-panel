import LandingPage from './pages/landingPage/LandingPage';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserPage from './pages/userPage/UserPage';
import { useState } from 'react';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import InputOTP from './pages/inputOTP/InputOTP';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage
      setIsLoggedIn = {setIsLoggedIn}
      isLoggedIn ={isLoggedIn}/>}/>
      {isLoggedIn && <Route path='/user' element={<UserPage/>}/>}
      <Route path='/forgotpassword' element={<ForgetPassword/>}></Route>
      <Route path='/forgotpassword/inputOTP' element={<InputOTP/>}></Route>
      
    </Routes>
   </Router>
{/* Smm app */}
    </div>
  );
}

export default App;
