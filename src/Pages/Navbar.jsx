import React, { useRef, useState } from 'react'
import "./Static/Navbar.css"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'



export default function Navbar({ search ,SUBMIT ,isAuthenticate,setIsAuthenticate}) {
    search.onChange = () => {
        console.log(search)
    }
    // const suggestText=useRef()
    let Navigate = useNavigate();
    const [appearance, setAppearance] = useState(" ");
    const [Suggest, setSuggest] = useState([]);
    function onfocusSearch() {
        setAppearance("activeAppearance");
        document.body.onscroll = function () {
           setAppearance(" ")
           setSuggest([])
          
           search.current.blur();
        }
    }
   async  function searchSuggest(e) {
        e.preventDefault()
        // setAppearance(e.target.value)

        if (e.target.value.trim().length > 1) {

            try {
                 let response=await fetch('http://localhost:1337/api/find/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: e.target.value.trim() })
             })
            let resdata=await response.json()
               
                if(resdata.result.length>0){
                    setSuggest(resdata.result)

                }else{
                    setSuggest(["No Suggestion For You Query"])
                }
                
                
            } catch(err){
                    console.log("There is some error")
                     setSuggest(["There is Some Error"])
                }
          
                
        }
        else {
            setSuggest([])
        }
    }

    const setSuggestFill = (val) => {
        // suggestText.current.value=val;
        search.current.value = val;
        // suggestText.current.blur();
        search.current.blur()
    }
    function searchSubmit(e) {
        e.preventDefault()
         console.log("submit from navbar")
        Navigate("/find")
       
    }

    function Logout(){
     localStorage.removeItem("token")   
     setIsAuthenticate(false)
     Navigate("/signin")
    }

    return (
        <nav className="navbar ">

            <div className=" Nav_cus" >
                <Link to="/" style={{ textDecoration: "none", color: "black" }}><h3 > Renter.Com</h3></Link>


                <form className=" nav_search_form" role="search" onSubmit={searchSubmit} ref={SUBMIT} >
                    <div>
                        <input className="" id='Search_Location_input' ref={search} type="search" placeholder="1200 Sf in kanker khera etc. " aria-label="Search" onInput={searchSuggest} onFocus={onfocusSearch} onBlur={() => { setAppearance(" "); setSuggest([]) }} />
                        <ul className="suggestCon" >
                            {

                                Suggest.map((data, ind) => {
                                    return (<li data-suggest={data} key={ind} style={{ padding: '0px 10px' }} onMouseDown={() => setSuggestFill(data)}>{data.length>50?data.slice(0,50)+"...":data}</li>)
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
                <div className="help_link">
                   {
                    isAuthenticate==true? <><Link to="/messanger" >Message</Link>&nbsp;&nbsp;<Link to="/dashboard" >Dashboard</Link>&nbsp;&nbsp;<Link onClick={Logout}>Logout</Link></>:<Link to="/signin" >Login</Link>

                   }
                   

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
