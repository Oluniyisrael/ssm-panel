import LandingPage from './pages/landingPage/LandingPage';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserPage from './pages/userPage/UserPage';

function App() {
  const isLoggedIn = true
  return (
    <div>
   <Router>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      {isLoggedIn && <Route path='/user' element={<UserPage/>}/>}
    </Routes>
   </Router>
{/* errand sending App */}
    </div>
  );
}

export default App;
