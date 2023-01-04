import Navbar from "./Navbar"
import Footer from "./Footer"
import { Navigate } from "react-router-dom"
import "./Static/form.css"
import { useEffect, useRef, useState } from "react"
import img1 from "./Static/img/SF1.jpg"

export default function Find({ search, SUBMIT }) {
  let [showPlaceBoxItem, setShowPlaceBoxItem] = useState([
 {giver_name:"Manish",
  title :"best shop for your business",
  contact_no : "",
  whatapp_no:"",
  place_size :"1200",
  price_pm :"5000",
  description : "good place for big showroom in main market knaker khera meerut",
  address : "kanker khera meerut auto stand",
  zip_code :"250001",
  city:"meerut",
  state:"uttar pradesh",
  country:"india",
  date:"2022-12-31"

 }
  ]);

  let [showPlaceBoxState, setShowPlaceBoxState] = useState("hide");


  const [formfilter, setFormFilter] = useState({
    query: "",
    country: "india",
    state: "",
    city: "",
    sort: "",
    size: "",
    rent: ""

  })

  const [PlaceItems, setPlaceItems] = useState([])

  async function FetchPlaces() {
    let headersList = {
      "Accept": "*/*",
      "Content-Type": "application/json"
    }



    let response = await fetch("http://localhost:1337/api/rentedshop", {
      method: "POST",
      body: JSON.stringify(formfilter),
      headers: headersList
    });

    let data = await response.json();
    console.log(data)
    console.log(formfilter)
    if (data.status === 200) {
      console.log("before", PlaceItems)
      setPlaceItems(data.places)
      console.log("after", PlaceItems)
    }

  }

  function filterhandle(e) {
    e.preventDefault()
    let { name, value } = e.target;
    setFormFilter({ ...formfilter, [name]: value })
    console.log(e.target)

  }
  useEffect(() => {
    FetchPlaces()
  }, [formfilter])


  useEffect(() => {
    SUBMIT.current.onsubmit = function () {
      setFormFilter({ ...formfilter, ["query"]: search.current.value })
      console.log("submit from find")
      console.log(search.current.value)


    }
  }, [])


   function showPlaceDetailsFun(imd){
      setShowPlaceBoxItem([PlaceItems[imd]])
      setShowPlaceBoxState("show")
   }


 

  return (
    <div>
      {/* <Navbar /> */}
      <div className="find_main_con">


        <div className="find_helper_div">
          <h4>Filter By  </h4>
          <div className="find_helper_form">
            <label htmlFor="country">Country :</label>
            <select name="country" id="" className="find_custom-select" onChange={filterhandle} defaultValue="india">
              <option value="">-- choose --</option>
              <option value="india" >India</option>
            </select>
            <label htmlFor="state">State :</label>
            <select name="state" id="" className="find_custom-select" onChange={filterhandle}>
              <option value="">-- choose --</option>
              <option value="uttar pradesh">Uttar Pradesh </option>
              <option value="haryana">Haryana</option>
            </select>
            <label htmlFor="city">City :</label>
            <select name="city" id="" className="find_custom-select" onChange={filterhandle}>
              <option value="">-- choose --</option>
              <option value="meerut">Meerut</option>
              <option value="ghaziabadh">Ghazibadh</option>
            </select>
          </div>

          <div>
            <label htmlFor="sort">Sort By : </label>
            &nbsp;
            <select name="sort" id="" className="find_custom-select" onChange={filterhandle}>
              <option value="" >-- Default --</option>
              <option value="new"> New</option>
              <option value="lowprice">Low To High Price</option>
              <option value="hightprice">High To Low Price</option>
              <option value="bigplace">Big To little Area</option>
              <option value="littleplace">Little To Big Area</option>
            </select>
          </div>
        </div>


       {/* show place  */}



        <div className={"showPlaceBox " + showPlaceBoxState} >
          <div className="showPlaceBox-Nav"><button onClick={()=>{setShowPlaceBoxState("hide")}} >&#10006;</button></div>
          <div className="showPlaceBox-Body">
            <div className="" style={{display: 'flex'}}>
              <div className="placeImage-Con">
                <div className="placeImage-Navbar">
                  <div className="placeImage active" style={{backgroundImage:"url("+img1+")"}}></div>
                  <div className="placeImage" style={{backgroundImage:"url("+img1+")"}}></div>
                  <div className="placeImage" style={{backgroundImage:"url("+img1+")"}}></div>
                  <div className="placeImage" style={{backgroundImage:"url("+img1+")"}}></div>
                
                </div>
                <div className="placeImage-Box" style={{backgroundImage:"url("+img1+")"}}>

                </div>
              </div>
              <div className="placeDetailsCon">

                     <h2>{showPlaceBoxItem[0].title}</h2>
                      <h6 >{showPlaceBoxItem[0].description}</h6>
                      <h5>{showPlaceBoxItem[0].place_size}(SFeet)</h5>
                      <h5>
                        &#8377;
                        {showPlaceBoxItem[0].price_pm}/Month
                      </h5>


                      <h6 className="text-muted" style={{ fontStyle: "italic" }}> {showPlaceBoxItem[0].city} , {showPlaceBoxItem[0].state} ,{showPlaceBoxItem[0].country}</h6>
                      <h6 className="text-muted" style={{ fontStyle: "italic" }}>
                        {showPlaceBoxItem[0].address}
                      </h6>   
                      <h6> {showPlaceBoxItem[0].date}</h6>




                
              </div>
            </div>
          </div>
        </div>





        {/*  show place  */}



        <div className="sidebar_result_con ">
          <div className="sidebar">
            <div className="mb-3 text-left">
              <label htmlFor="Name"> &nbsp;  Rent / Month (INR) </label>
              <div style={{ paddingLeft: "10px" }}>
                <div ><input type="radio" name="Rent_Per_Month" id="" defaultChecked />All</div>
                <div ><input type="radio" name="Rent_Per_Month" id="" /> below - 1000 </div>
                <div ><input type="radio" name="Rent_Per_Month" id="" /> 1000 - 3000 </div>
                <div><input type="radio" name="Rent_Per_Month" id="" /> 3000 - 5000 </div>
                <div><input type="radio" name="Rent_Per_Month" id="" /> 5000 - 8000 </div>
                <div><input type="radio" name="Rent_Per_Month" id="" /> 9000 - above </div>
              </div>
            </div>
            <div className="mb-3 text-left">
              <label htmlFor="Name"> &nbsp; Place Size (SFeet) </label>
              <div style={{ paddingLeft: "10px" }}>
                <div ><input type="radio" name="Place_Size" defaultChecked value="" /> All</div>
                <div ><input type="radio" name="Place_Size" value="0-10" /> below - 10</div>
                <div ><input type="radio" name="Place_Size" value="10-50" /> 10 - 50 </div>
                <div><input type="radio" name="Place_Size" value="50-100" /> 50 - 100 </div>
                <div><input type="radio" name="Place_Size" value="100-300" /> 100- 300 </div>
                <div><input type="radio" name="Place_Size" value="300-" /> 300 - above </div>
              </div>
            </div>
          </div>
          <div className="result_con container">
            <div className="text-left">Result 50  1/8</div>
            {
              PlaceItems.map((place, ind) => {
                return (
                  <div className="place_item container text-left" key={ind} >
                    <div className="place_img_con" style={{cursor:"pointer", backgroundImage: "url(" + img1 + ")" }} onClick={()=>{showPlaceDetailsFun(ind)}}>
                    </div>
                    <div className="place_deatil_con">
                      <h4 className="showplacebox-target" onClick={()=>{showPlaceDetailsFun(ind)}} style={{cursor:"pointer"}}>&#8689;{place.title}</h4>
                      <h6 className="text-muted">{place.description}</h6>
                      <h5>{place.place_size}(SFeet)</h5>
                      <h5>
                        &#8377;
                        {place.price_pm}/Month
                      </h5>


                      <h6 className="text-muted" style={{ fontStyle: "italic" }}> {place.city} , {place.state} ,{place.country}</h6>
                      <address className="text-muted" style={{ fontStyle: "italic" }}>
                        {place.address}
                      </address>

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
