import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';

import {
  BrowserRouter,
  Routes,
  Route,
  Redirect

} from "react-router-dom";
import Login from './Pages/Login';
import SignUpPage from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Rent from './Pages/Rent';
import Find from './Pages/Find'
function App() {
  let isAuthenticate = true;
  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find" element={<Find />} />


         <Route path="/signin"   element={<Login />}/>
          {/* <Route path="/signin">
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route path="/signup" element={<SignUpPage />} />
          <Route exact path="/dashboard" element={<Dashboard />}/>
          {/* <Route exact path="/dashboard" >
            {isAuthenticate ? <Dashboard /> : <Login />}
          </Route> */}

          <Route exact path="/dashboard/rent" element={<Rent />}/>

          {/* <Route exact path="/dashboard/rent" >
            {isAuthenticate ? <Rent /> : <Login />}
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
