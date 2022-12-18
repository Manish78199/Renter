import "./Static/form.css"
import { useState } from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Dashboard({ search }) {
  let [places, setplaces] = useState([])

  async function fetchplace() {
    try {


      let response = await fetch('http://localhost:1337/auth/api/myshops/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          "token": localStorage.getItem("token")
        }
      })
      let fetchedplaces = await response.json()
      setplaces(fetchedplaces.places)

    } catch (error) {

      setplaces([])

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






  return (
    <div>
      {/* <Navbar /> */}
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
          <h1>Your Added Shop </h1>
        </div>
        <div className="AddedShop_con">
          {
            places.map((place, ind) => {
              return (
                <div className="place_item container text-left" key={ind}>
                  <div className="place_img_con" style={{ backgroundImage: "url(" + place.image + ")" }}>
                  </div>
                  <div className="place_deatil_con">
                    <h4>{place.title}</h4>
                    <h5>{place.description}</h5>
                    <h5>{place.place_size}</h5>
                    <h5>
                      &#8377;
                      {place.price_pm}/Month
                    </h5>


                    <address>{place.city} , {place.state} ,{place.country}</address>
                    <address>
                      {place.address}
                    </address>

                    <h6>{place.date}</h6>
                  </div>
                </div>


              )
            })}
          {places.length > 0 ? null : <p>you are not add your place to giving rent yet ,
            click "Add Place " button to dd your place to giving rent</p>

          }

        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}
