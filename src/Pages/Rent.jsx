import Navbar from "./Navbar"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import uploadimage from "./Static/img/upload2.svg"
import "./Static/form.css"



export default function Rent() {
    const [showImage, setShowImage] = useState([null])
    const [shopImage, setShopImage] = useState([])
    const [formfeild, setformfeild] = useState({
        giver_name: "",
        title: "",
        contact_no: "",
        whatapp_no: "",
        place_size: "",
        price_pm: "",
        description: "",
        address: "",
        zip_code: "",
        city: "",
        state: "",
        country: ""
    })
    useEffect(() => {



        setShowImage([])
        console.log(shopImage)
        shopImage.forEach((ima) => {
            var reader = new FileReader();
            reader.onloadend = function (event) {
                console.log("useeffect")
                setShowImage(s => [...s, event.target.result]);
                //    console.log(event.target.result)
            }
            reader.readAsDataURL(ima);
        })


    }, [shopImage])

    function handleformfeild(e) {
        e.preventDefault()
        let { name, value } = e.target;
        setformfeild({
            ...formfeild,
            [name]: value
        })
    }


    function handleimagefeild(e) {
        e.preventDefault()

        setShopImage([
            ...shopImage,
            ...e.target.files
        ])



    }


    async function uploadshopdata(e) {


        let formd = new FormData()
        console.log(shopImage)
        console.log("show image length", showImage.length)
        formd.append("placedata", JSON.stringify(formfeild))
        shopImage.forEach((file, index) => {
            formd.append("placeimage", file)

        })
        console.log(formd)
        let headersList = {
            "Accept": "*/*"

        }


        let response = await fetch("http://localhost:1337/postImage", {
            method: "POST",
            body: formd,
            headers: headersList
        });

        let data = await response.text();
        console.log(data);


    }


    return (
        <>
            {/* <Navbar /> */}
            <div style={{
                textAlign: 'left',
                fontSize: '18px',
                backgroundColor: '#ededed',
                padding: '10px'
            }}>
                <p><Link to="/">Home</Link> &gt; <Link to="/dashboard">Dashboard</Link> &gt; adding Place here</p>
            </div>
            <div className="conatiner" style={{ backgroundColor: '#ededed', paddingBottom: "20px" }}>


                <div className="container col-md-8 order-md-1 mb-3" style={{ textAlign: "left", padding: "20px", backgroundColor: "white" }}>
                    <h2 className="mt-3" style={{
                        marginBottom: '50px',
                        color: '#010030'
                    }}>Give Some Information To Add Place For Rent.</h2>
                    <form className="needs-validation" method="post" noValidate>


                        <div className="row">
                            <div className="mb-3 w-50">
                                <label htmlFor="Name">Your Name.  </label>
                                <input type="text" className="form-control" style={{ width: "350px" }} id="giver_name" placeholder="Manish" name="giver_name" required onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid Name for shipping updates.
                                </div>
                            </div>


                            <div className="mb-3 w-50">
                                <label htmlFor="title">Title.  </label>
                                <input type="text" className="form-control" style={{ width: "350px" }} id="title" placeholder="best shop for shoes showroom" name="title" required onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid Name for Title.
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="mb-3 w-50">
                                <label htmlFor="number">Contact Number. </label>
                                <input type="number" className="form-control" id="contact_no" style={{ width: "350px" }} name="contact_no" placeholder="985xxxxx56"
                                    maxLength="10" required onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                            <div className="mb-3 w-50">
                                <label htmlFor="Whatapp  number">Whatapp Number. </label>
                                <input type="number" className="form-control" id="number" name="whatapp_no" placeholder="86945xxxxx"
                                    maxLength="10" required style={{ width: "350px" }} onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid whatapp Number.
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="mb-3 w-50">
                                <label htmlFor="Place_size">Place Size. </label>
                                <input type="text" className="form-control" id="number" name="place_size" placeholder="1200 sf"
                                    required style={{ width: "350px" }} onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid Place size.
                                </div>
                            </div>

                            <div className="mb-3 w-50">
                                <label htmlFor="Rent Amount">Rent Amount/Month. </label>
                                <input type="number" className="form-control" id="number" name="price_pm" placeholder="5000 INR"
                                    maxLength="10" required style={{ width: "350px" }} onInput={handleformfeild} />
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>
                        </div>


                        <div className="mb-3">
                            <label htmlFor="Description">Description. </label>
                            <textarea className="form-control" id="Description" name="description" placeholder="1200 sf in main market , good place for bakery , clothes showroom etc."
                                onInput={handleformfeild} required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>



                        <div className="mb-3">
                            <label htmlFor="address">Address. </label>
                            <input type="text" className="form-control" id="address" name="address" placeholder="1234 Main St"
                                onInput={handleformfeild} required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">Country.</label>
                                <select className="custom-select d-block w-100" id="country" name="country" onChange={handleformfeild} required>
                                    <option value="">Choose...</option>
                                    <option value="india">India</option>
                                    <option value="america">America</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid country.
                                </div>
                            </div>
                            <div className="col-md-4 mb-3">
                                <label htmlFor="state">State.</label>
                                <select className="custom-select d-block w-100" id="state" name="state" onChange={handleformfeild} required>
                                    <option value="">Choose...</option>
                                    <option value="uttar pradesh">Uttar Pradesh</option>
                                    <option value="haryana">Haryana</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please provide a valid state.
                                </div>
                            </div>
                            <div className="col-md-3 mb-3">
                                <label htmlFor="zip">Zip code/Pin code.</label>
                                <input type="text" className="form-control" name="zip_code" id="zip" placeholder="250012" onInput={handleformfeild} required />
                                <div className="invalid-feedback">
                                    Zip code required.
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5 mb-3">
                                <label htmlFor="country">City.</label>
                                <select className="custom-select d-block w-100" id="city" name="city" onChange={handleformfeild} required>
                                    <option value="">Choose...</option>
                                    <option value="meerut">Meerut</option>
                                    <option value="ghaziabadh">Ghaziabadh</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please select a valid City .
                                </div>
                            </div>
                        </div>



                        <div className="row mb-3">
                            <h5>Images of Place / Shop.</h5>
                            <div className="uploadImageCon" style={{
                                display: 'flex',
                                borderRadius: '5px',
                                height: '600px',
                                flexDirection: 'column',
                                backgroundColor: '#ededed',
                                alignItems: 'center',
                                padding: '50px 0px',
                                justifyContent: 'center',
                                color: "#010024"
                            }}>
                                <h1 style={{ textAlign: "center" }}>Uploads Your Image Here</h1>
                                <div className="uploadInside" style={{

                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    backgroundColor: 'rgb(255, 255, 255)',
                                    width: '400px',
                                    display: 'flex',
                                    border: '2px dashed',
                                    height: '350px',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }} onClick={() => { document.getElementById("uploadImageInput").click() }}>
                                    <input type="file" name="" id="uploadImageInput" onInput={handleimagefeild} hidden multiple />
                                    <div style={{
                                        backgroundImage: "url(" + uploadimage + ")",
                                        width: '100px',
                                        backgroundRepeat: 'no-repeat',
                                        height: '100px'
                                    }}></div>
                                    <h4>Drop Image Here</h4>
                                    <h6>or</h6>
                                    <h5 style={{
                                        backgroundColor: 'rgb(0 102 151)',
                                        color: 'rgb(255, 255, 255)',
                                        borderRadius: '26px',
                                        padding: '6px 22px',
                                        fontSize: '18px'
                                    }}>Upload </h5>


                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <div className="image_con">

                                {

                                    // showImage.map(function(ima){
                                    //       return <div style={{backgroundImage:"url("+ima+")"}}></div>  

                                    // })
                                    showImage.map(function (ima, ind) {
                                        console.log(ind)
                                        return (<div key={ind} style={{
                                            height: '300px',
                                            backgroundRepeat: 'no-repeat',
                                            width: '300px',
                                            backgroundSize: 'contain', backgroundImage: "url(" + ima + ")"
                                        }}></div>)




                                    })


                                    // style={{backgroundImage:"url("+ima+")"}}
                                    //  showImage.map((data) => {
                                    //     return (<div >{data}</div>)
                                    // })

                                }
                            </div>
                        </div>

                        <div><button type="button" className="btn btn-primary btn-lg" onClick={uploadshopdata} >Submit</button></div>
                    </form>


                </div>
            </div>

            {/* <Footer /> */}
        </>
    )
}
