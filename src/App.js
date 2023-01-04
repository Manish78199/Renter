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
import Messanger from './Pages/Messanger';


import { useEffect, useRef, useState } from 'react';

function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  useEffect(()=>{
     if (localStorage.getItem("token")) {
   
    setIsAuthenticate(true)
  }
  },[])
 

  let seachedText = useRef();
  let seachSubmitform = useRef();
  let alertb = useRef();


   function ShowAlert(type, message) {
    try {
      alertb.current.style.backgroundColor = type == "Error" ? "#f82828" : type == "Success" ? "#0dd3af" : "#ddcc05"
      alertb.current.style.display = "block"
      alertb.current.innerHTML = type + " : " + message;
       setTimeout( () => {
        alertb.current.style.display = "none"
      }, 2000)
    } catch (error) {
      alert(message)
    }

  }

  return (

    <div className="App">

      <BrowserRouter>
        <Navbar search={seachedText} SUBMIT={seachSubmitform} isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate}/>
        <div className="Alert_Box" ref={alertb} ></div>
        <Routes>

          <Route path="/" element={<Home search={seachedText}/>} />
          <Route path="/find" element={<Find search={seachedText} SUBMIT={seachSubmitform} />} />


          <Route exact path="/signin" element={isAuthenticate ? <Navigate to="/dashboard" /> : <Login search={seachedText} Alert={ShowAlert} Auth={setIsAuthenticate} />} />
          {/* <Route path="/signin">
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route path="/signup" element={<SignUpPage search={seachedText} Alert={ShowAlert} />} />
          <Route exact path="/dashboard" element={isAuthenticate ? <Dashboard search={seachedText} Alert={ShowAlert} /> : <Navigate to="/signin" />} />
          {/* <Route exact path="/dashboard" >
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route exact path="/dashboard/rent" element={isAuthenticate ? <Rent Alert={ShowAlert}/> : <Navigate to="/signin" />} />
          
          <Route exact path="/messanger" element={isAuthenticate ? <Messanger Alert={ShowAlert}/> : <Navigate to="/signin" />} />
          
          

        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
