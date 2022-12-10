import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";
import Login from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Rent from './Pages/Rent';
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/dashboard/rent" element={<Rent/>}/>
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
