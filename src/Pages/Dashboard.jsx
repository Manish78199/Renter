import "./Static/form.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useRef } from "react"

export default function Dashboard({ search, Alert }) {
  let [places, setplaces] = useState([])

  async function fetchplace() {
    Alert("Meassage", "We are fetching your Places ....")
    try {


      let response = await fetch('http://localhost:1337/api/auth/myshops/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          "token": localStorage.getItem("token")
        }
      })
      let fetchedplaces = await response.json()
      if(fetchedplaces.status===200){
        setplaces(fetchedplaces.places)
      }
     
     
    } catch (error) {

      setplaces([])
      Alert("Error", "We are Not Connected to Server ")

    }
  }
  useEffect(() => {
    fetchplace();
  }, [])


  useEffect(() => {

    document.title = " Renter |  Dashboard "
    search.current.value = ""
  }, [])
  const mylocation = useLocation()
  let deleteindex = null;

  let modelcon = useRef()


  function removeplace(dind) {

    deleteindex = dind
    modelcon.current.style.display = "block"

  }



  async function removeplaceform(pid, dindex) {
    
    let headersList = {
      "Accept": "*/*",
      "token": localStorage.getItem("token")
    }

    try {
      let response = await fetch("http://localhost:1337/api/auth/dshop/" + pid, {
        method: "DELETE",
        headers: headersList
      });

      let data = await response.json();
      if (data.status === 200) {
        let updateplaces = places.filter((val, ind) => {
          return ind !== dindex
        })
        setplaces(updateplaces)
        Alert("Success", data.succes)
      }
      else {
        Alert("Error", data.error)
      }



    } catch (error) {
      Alert("Error", "We are Not Connected to Server ")
    }



  }




  function checkModdlVal(e) {
    e.preventDefault()
    
    modelcon.current.style.display = "none"
    e.target.getAttribute("mychoice") === "1" ? removeplaceform(places[deleteindex]._id, deleteindex) : deleteindex = null;
  }


  return (
    <div>
      {/* <Navbar /> */}
      <div className="modal" ref={modelcon} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true" style={{
          backgroundColor: '#3c3c3c57'
        }}>
        <div className="modal-dialog" role="document" style={{ marginTop: "50px" }}>
          <div className="modal-content">

            <div className="modal-body">

              Are You Sure To Remove Place ?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" id="RemoveConfirm" onClick={checkModdlVal} mychoice="1">Remove</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={checkModdlVal}>No</button>

            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: "500px", width: "100%", backgroundColor: "#f1f1f1" }}>

        <div className="dash_help_nav" style={{ width: "100%" }}>
          <Link to="/dashboard/rent" className="btn btn-primary" style={{
            padding: '7px 15px',
            fontSize: '18px',
            float: 'left',
            margin: '10px'
          }} >+ Add Place</Link>
          &nbsp;
          &nbsp;
          <h1>Your Added Places </h1>
        </div>
        <div className="AddedShop_con" style={{ paddingBottom: "20px" }}>
          {
            places.map((place, ind) => {
              return (
                <div className="place_item container mb-3 text-left" key={ind} style={{justifyContent: 'space-between'}}>
                  <div style={{
                    display: 'flex',

                    alignItems: 'center'
                  }}>
                    <div className="place_img_con" style={{ backgroundImage: "url(" + place.image + ")" }}>
                    </div>
                    <div className="place_deatil_con">
                      <b><h4>{place.title}</h4></b>
                      <h6 className="fade-color">{place.description}</h6>
                      <b><h5>{place.place_size} (SFeet)</h5></b>
                      <b> <h5>
                        &#8377;
                        {place.price_pm} / month
                      </h5></b>


                      <address className="fade-color"> {place.address} , {place.city} , {place.state} ,{place.country}
                      </address>

                      <h6 className="fade-color">{place.date}</h6>
                    </div>
                  </div>

                  <div className="modify_place_btn">
                    <button className="" onClick={() => { removeplace(ind) }}><i className="fa fa-trash-o" aria-hidden="true"></i> Remove</button>
                    <button className="" onClick={() => { console.log("Edit clicked")}}><i className="fa fa-pencil" aria-hidden="true"></i>  Edit</button>
                  </div>
                </div>


              )
            })}
          {places.length > 0 ? null : <p style={{fontSize:"18px",textTransform:"capitalize"}}>you are not add any place to giving rent yet ,
            click "Add Place " button to add place to giving for rent</p>

          }

        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}
