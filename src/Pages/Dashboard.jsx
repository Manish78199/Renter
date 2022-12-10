import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export default function Dashboard() {
  useEffect(() => {
    document.title = " Renter |  Dashboard "
  })
  const mylocation=useLocation()
  return (
    <div>
      <Navbar />
      <div style={{ minHeight: "500px", width: "100%", backgroundColor: "#f1f1f1" }}>
        <div className="dash_help_nav" style={{width:"100%"}}>
          <Link to="/dashboard/rent" className="btn btn-primary" style={{
            padding: '7px 15px',
            fontSize: '18px',
            float: 'left',
            margin: '10px'
          }} >+ Add Place</Link>
        </div>
        <div className="AddedShop_con">
          <p>you are not add your place to giving rent yet ,
          click "Add Place " button to dd your place to giving rent</p>
        </div>

      </div>
      <Footer />
    </div>
  )
}
