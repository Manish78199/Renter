import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"


export default function SignUpPage() {

    useEffect(() => {
        document.title = " Renter |  Sign Up "
    })


    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    });

    function handleForm() {

        fetch('http://localhost:1337/signup/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => console.log(data.description))
    }
    /*console.log(JSON.parse(data))*/



    function handleFormSignup(e) {
        e.preventDefault();
        var Name = e.target.name;
        var value = e.target.value;
        // var neobkj = {};
        // neobkj[Name] = value;
        setUser(user => ({
            ...user,
            // ...neobkj
            [Name]:value
        })
        )


    }















    return (
        <>
            {/* <Navbar /> */}
            <div style={{
                width: "100%",
                minHeight: "550px",
                maxHeight: "800px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ebebeb",
                padding: "30px"
            }}>
                <div className="Signup_con" style={{
                    padding: '20px',
                    boxShadow: '0 0 4px grey',
                    backgroundColor: 'white',
                    rowGap: "10px",
                    borderRadius: "5px"
                }}
                >
                    <h3 style={{ textAlign: "left" }}>Sign Up ,</h3>
                    <br />
                    <form method="post" className="SignupForm" >
                        <div className="cus_row">
                            <div className="cus_column">
                                <label htmlFor="email" >UserName</label>
                                <input type="email" name="username" id="" placeholder="Manish" onChange={handleFormSignup} /></div>
                            <div className="cus_column">
                                <label htmlFor="email" >Email</label>
                                <input type="email" name="email" id="" placeholder="abc@gmail.com" onChange={handleFormSignup} />
                            </div>
                        </div>

                        <div className="cus_row">
                            <div className="cus_column"><label htmlFor="password">Password</label>
                                <input type="password" name="password" id="" placeholder="********" onChange={handleFormSignup} />
                            </div>
                            <div className="cus_column">
                                <label htmlFor="password">Confirm Password</label>
                                <input type="password" name="cpassword" id="" placeholder="********" onChange={handleFormSignup} />
                            </div>
                        </div>

                        <div >Sign up Means,you agree <a href="http://">Term</a>  and <a href="http://">Condition</a> </div>
                        <div style={{ width: "100%" }}> <input type="button" id="submit" value="Sign Up" onClick={handleForm} /></div>

                    </form>

                    <br />
                    <div style={{ height: "30px", lineHeight: "30px", fontSize: "18px" }}>Old User ? <Link to="/signin">Sign in </Link>  </div>
                </div>




            </div>
            {/* <Footer /> */}
        </>
    )
}
