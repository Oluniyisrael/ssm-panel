import LandingPage from './pages/landingPage/LandingPage';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserPage from './pages/userPage/UserPage';
// import SignPage from './pages/userPage/UserPage';
import ForgetPassword from './pages/forgetPassword/ForgetPassword';
import InputOTP from './pages/inputOTP/InputOTP';

function App() {
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      {/* <Route path='signup' element={<SignUp/>}></Route> */}
      <Route path='/user' element={<UserPage/>}/>
      <Route path='/forgotpassword' element={<ForgetPassword/>}></Route>
      <Route path='/forgotpassword/inputOTP' element={<InputOTP/>}></Route>
    </Routes>
   </Router>
{/* Smm app */}
    </div>
  );
}

export default App;
