import "./Static/Common.css"
import easy from "./Static/img/easy.png"
import friendship from "./Static/img/friendship.png"
import fast from "./Static/img/fast.png"
import secure from "./Static/img/secure.png"
import trust from "./Static/img/trust.png"
import privacy from "./Static/img/privacy.png"


export default function Responsible() {
    return (
        <div >
            <main className="pb-3 pt-3" role="main" style={{backgroundColor: '#e7e7e7'}}>


                <div className="jumbotron py-4" style={{ backgroundColor: "whitesmoke" }}>
                    <div className="container" style={{ textAlign: "left" }}>
                        <h1 className="display-3">Why we Here ?</h1>
                        <p style={{fontSize:"18px"}}>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>

                    </div>
                </div>
                 

                  <div className="container " style={{textAlign:'left'}}>

                    <div className="row mb-3 mt-3" style={{justifyContent:"center",columnGap:"20px"}}>
                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={easy} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Easy</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>

                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={fast} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Fast</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={friendship} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">User Friendly</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>


                    <div className="row mb-3 mt-3" style={{justifyContent:"center",columnGap:"20px"}}>
                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={secure} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Secure</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>

                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={privacy} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Privacy</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                        <div className="card" style={{width: "20rem"}}>
                            <img className="card-img-top" src={trust} alt="" />
                            <div className="card-body">
                                <h4 className="card-title">Trust</h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>



                </div>

               
            </main>
        </div>
    )
}
