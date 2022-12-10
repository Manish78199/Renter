import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useEffect } from 'react'
import { useState } from "react"
export default function Login() {

  useEffect(() => {
    document.title = " Renter |  Sign in "
  })


  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  function handleForm() {

    fetch('http://localhost:1337/signin/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => console.log("Login successfully"))
  }
  /*console.log(JSON.parse(data))*/



  function handleFormSignin(e) {
    e.preventDefault();
    var Name = e.target.name;
    var value = e.target.value;
    var neobkj = {};
    neobkj[Name] = value;
    setUser(user => ({
      ...user,
      ...neobkj
    })
    )


  }

  return (
    <>
      <Navbar />
      <div style={{
        width: "100%",
        height: "550px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebebeb"
      }}>
        <div className="error_con"></div>
        <div className="Login_con" style={{
          padding: '20px',
          boxShadow: '0 0 4px grey',
          backgroundColor: 'white',

          borderRadius: "5px"
        }}
        >
          <h3 style={{ textAlign: "left" }}>Sign in ,</h3>
          <br />
          <form method="post" className="LoginForm" >
            <label htmlFor="email" >Email</label>
            <input type="email" name="email" id="" placeholder="abc@gmail.com" onChange={handleFormSignin} required />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" placeholder="********" onChange={handleFormSignin} required />

            <a href="http://"  >Forgot Password ?</a>

            <input id="submit" type="button" value="Sign in" onClick={handleForm} />
          </form>

          <br />
          <div style={{ height: "30px", lineHeight: "30px", fontSize: "18px" }}>New User ? <Link to="/signup">Create Account</Link>  </div>
        </div>




      </div>
      <Footer />
    </>
  )
}
