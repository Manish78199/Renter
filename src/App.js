import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
 

} from "react-router-dom";
import Login from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Rent from './Pages/Rent';
import Find from './Pages/Find'
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import { useRef } from 'react';

function App() {
  let isAuthenticate=false;
  if(localStorage.getItem("token")){
         isAuthenticate= true;
  }
  
  let seachedText=useRef();
  let seachSubmitform=useRef();

  return (

    <div className="App">
      
      <BrowserRouter>
      <Navbar search={seachedText} SUBMIT={seachSubmitform}/>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find  search={seachedText} SUBMIT={seachSubmitform} />} />


         <Route path="/signin"   element={isAuthenticate ? <Navigate to="/dashboard" /> : <Login search={seachedText}/>}/>
          {/* <Route path="/signin">
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route path="/signup" element={<SignUpPage search={seachedText} />} />
          <Route exact path="/dashboard" element={isAuthenticate ? <Dashboard search={seachedText}/>  : <Navigate to="/signin" />}/>
          {/* <Route exact path="/dashboard" >
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route exact path="/dashboard/rent" element={isAuthenticate ? <Rent /> : <Navigate to="/signin" />}/>

          {/* <Route exact path="/dashboard/rent" >
            {isAuthenticate ? <Rent /> : <Login />}
          </Route> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
