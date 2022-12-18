import Navbar from "./Navbar"
import Footer from "./Footer"
import { Navigate } from "react-router-dom"
import "./Static/form.css"
import { useEffect, useState } from "react"
import img1 from "./Static/img/SF1.jpg"

export default function Find({search,SUBMIT}) {
  
  SUBMIT.current.onsubmit=function(){
    console.log("submit from find")
    console.log(search.current.value)
    
  }
  
  // useEffect(()=>{
  //   console.log(searchvalue)
  // },[searchvalue])
  // search.current.onchange=function(e){
  //   console.log(e,this,search.current.value)
  // }
   

  const [Items, setItems] = useState([
    {
      image: img1,
      giver_name: "Manish",
      title: "This is best place for showroom",
      contact_no: "7819953878",
      whatapp_no: "7819953878",
      place_size: "1200Sf",
      price_pm: "8000",
      description: " 1200 sf place is the  best for clothes showroom",
      address: "kanker khera meeut ",
      zip_code: "250001",
      city: "Meerut",
      state: "Uttar Pradesh",
      country: "India"
    }
  ])

  
  return (
    <div>
      {/* <Navbar /> */}
      <div className="find_main_con">


        <div className="find_helper_div">
          <h4>Filter By  </h4>
          <div className="find_helper_form">
            <label htmlFor="country">Country :</label>
            <select name="" id="" className="find_custom-select">
              <option value="">choose...</option>
            </select>
            <label htmlFor="state">State :</label>
            <select name="" id="" className="find_custom-select">
              <option value="">choose...</option>
            </select>
            <label htmlFor="city">City :</label>
            <select name="" id="" className="find_custom-select">
              <option value="">choose...</option>
            </select>
          </div>
          <div>
            <label htmlFor="sort">Sort By : </label>
            &nbsp;
            <select name="" id="" className="find_custom-select">
              <option value="default">---Default--- </option>
              <option value="new">New</option>
              <option value="lowprice">Low To High Price</option>
              <option value="hightprice">High To Low Price</option>
              <option value="bigplace">Big To little Area</option>
              <option value="littleplace">Little To Big Area</option>
            </select>
          </div>
        </div>
        <div className="sidebar_result_con ">
          <div className="sidebar">
            <div className="mb-3 text-left">
              <label htmlFor="Name"> &nbsp;  Rent/Month (INR) </label>
              <div style={{ paddingLeft: "10px" }}>
                <div ><input type="checkbox" name="Rent_Per_Month" id=""  /> below - 1000 </div>
                <div ><input type="checkbox" name="Rent_Per_Month" id="" /> 1000 - 3000 </div>
                <div><input type="checkbox" name="Rent_Per_Month" id="" /> 3000 - 5000 </div>
                <div><input type="checkbox" name="Rent_Per_Month" id="" /> 5000 - 8000 </div>
                <div><input type="checkbox" name="Rent_Per_Month" id="" /> 9000 - above </div>
              </div>
            </div>
            <div className="mb-3 text-left">
              <label htmlFor="Name"> &nbsp; Place Size (SFeet) </label>
              <div style={{ paddingLeft: "10px" }}>
                <div ><input type="checkbox" name="Place_Size" id="" /> below - 10sf</div>
                <div ><input type="checkbox" name="Place_Size" id="" /> 10f - 50sf </div>
                <div><input type="checkbox" name="Place_Size" id="" /> 50sf - 100sf </div>
                <div><input type="checkbox" name="Place_Size" id="" /> 100sf - 300 </div>
                <div><input type="checkbox" name="Place_Size" id="" /> 300 - above </div>
              </div>
            </div>
          </div>
          <div className="result_con container">
            <div className="text-left">Result 50  1/8</div>
            {
              Items.map((place,ind) => {
                return (
                  <div className="place_item container text-left" key={ind}>
                    <div className="place_img_con" style={{ backgroundImage: "url(" + place.image + ")" }}>
                    </div>
                    <div className="place_deatil_con">
                      <h4>{place.title}</h4>

                      <h5>{place.place_size}</h5>
                      <h5>
                        &#8377;
                        {place.price_pm}/Month
                      </h5>

                      
                      <h6> {place.city} , {place.state} ,{place.country}</h6>
                      <address>
                        {place.address}
                      </address>
                      <h5>{place.description}</h5>
                    </div>
                  </div>


                )
              })
            }
          </div>
        </div>

      </div>
      {/* <Footer /> */}
    </div>
  )
}
