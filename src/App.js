import LandingPage from './pages/landingPage/LandingPage';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserPage from './pages/userPage/UserPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  function setLoggedIn() {
    setIsLoggedIn(true)
  }
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage
      setLoggedIn = {setLoggedIn}/>}/>
      {isLoggedIn && <Route path='/user' element={<UserPage/>}/>}
    </Routes>
   </Router>
{/* Smm app */}
    </div>
  );
}

export default App;
