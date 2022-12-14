import React, { useRef, useState  } from 'react'
import "./Static/Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function Navbar() {
    const suggestText=useRef()
    let Navigate=useNavigate();
    const [appearance, setAppearance] = useState(" ");
    const [Suggest, setSuggest] = useState([]);
    function onfocusSearch() {
        setAppearance("activeAppearance");
        document.body.onscroll = function () {
            setAppearance(" ")
            setSuggest([])
            // document.getElementById("Search_Location_input").blur()
             suggestText.current.blur();
        }
    }
    function searchSuggest(e) {
        e.preventDefault()
        // setAppearance(e.target.value)
        
        if (e.target.value.trim().length > 0) {


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
        else {
            setSuggest([])
        }
    }

    const setSuggestFill=(val)=>{
        suggestText.current.value=val;
        
        suggestText.current.blur();
    }
 function searchSubmit(e){
  e.preventDefault()
Navigate("/find")
    }



    return (
        <nav className="navbar ">

            <div className=" Nav_cus" >
                <Link to="/" style={{ textDecoration: "none", color:"black"}}><h3 > Renter.Com</h3></Link>


                <form className=" nav_search_form" role="search" onSubmit={searchSubmit} >
                    <div>
                        <input className="" id='Search_Location_input' ref={suggestText} type="search"  placeholder="1200 Sf in kanker khera etc. " aria-label="Search" onChange={searchSuggest} onFocus={onfocusSearch} onBlur={() => { setAppearance(" "); setSuggest([]) }} />
                        <ul className="suggestCon" >
                            {

                                Suggest.map((data,ind) => {
                                    return (<li data-suggest={data}  key={ind} style={{ padding: '0px 10px' }} onMouseDown={()=>setSuggestFill(data)}>{data}</li>)
                                })
                                //    Suggest.map((data)=>{
                                //     return (
                                //      <li >{{data}}</li>
                                //     )

                                //    }) 
                            }
                        </ul>
                    </div>
                    <button className="search_btn" type="submit" ></button>

                </form>
                <div> 
                    <Link  to="/dashboard" style={{fontSize:"18px",color:"black",padding:"8px 15px"}}>Dashboard</Link>
                
                  &nbsp;&nbsp;
                  &nbsp;&nbsp;
                <Link  to="/signin" style={{fontSize:"18px",color:"white",backgroundColor:"royalblue",padding:"8px 15px"}}>Login</Link>
                
                </div>
                
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
