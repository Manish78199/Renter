import React from 'react'
import "./Static/Navbar.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


export default function Navbar() {

    const suggestConStyle = {
        width: '550px',
        textAlign: 'left',
        listStyle: 'none',
        fontSize: '20px',
        marginTop: '10px',
        borderRadius: '4px',
        padding: '0px 8px',
        boxShadow: 'rgb(145 145 145) 1px 1px 6px',
        zIndex: '10',
        position: 'fixed',
        backgroundColor: 'white'
    }
    const [appearance, setAppearance] = useState(" ");
    const [Suggest, setSuggest] = useState([]);
    function onfocusSearch() {
        setAppearance("activeAppearance");
        document.body.onscroll = function () {
            setAppearance(" ")
            setSuggest([])
            document.getElementById("Search_Location_input").blur()
        }
    }
    function searchSuggest(e) {
        e.preventDefault()
       
        if(e.target.value.trim().length>0){

        
        fetch('http://localhost:1337/find/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: e.target.value.trim() })
        })
            .then(response => response.json())
            .then(data => { setSuggest(JSON.parse(data).result); })
    }
    else{
       setSuggest([])
    }
    }






    return (
        <nav className="navbar bg-light">

            <div className=" Nav_cus" >
                <Link to="/" style={{ textDecoration: "none", color: "black" }}><h3 > Renter.Com</h3></Link>


                <form className="d-flex" role="search" >
                    <div>
                        <input className="form-control me-2" id='Search_Location_input' type="search" placeholder="1200 Sf in kanker khera etc. " aria-label="Search" onChange={searchSuggest} onFocus={onfocusSearch} onBlur={() => { setAppearance(" "); setSuggest([]) }} />
                        <ul className="suggestCon" style={suggestConStyle}>
                            {

                                Suggest.map((data) => {
                                    return (<li data-suggest={data} style={{ padding: '0px 10px' }}>{data}</li>)
                                })
                                //    Suggest.map((data)=>{
                                //     return (
                                //      <li >{{data}}</li>
                                //     )

                                //    }) 
                            }
                        </ul>
                    </div>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    <Link to="/signin">Login</Link>
                </form>

            </div>
            <div className={appearance} style={{
                top: '70px',
                zIndex: '9',
                position: 'fixed',
                backgroundColor: '#0000004a',
                width: '100%',
                height: '700px',
                display: "none"
            }} >

            </div>


        </nav>
    )
}
