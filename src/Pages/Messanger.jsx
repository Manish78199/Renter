import { useEffect } from "react"
import img1 from "./Static/img/SF1.jpg"
import "./Static/Messanger.css"
export default function Messanger() {

  // useEffect(()=>{
  //   var socket = io();
  // },[])

  return (
    // <div className="messanger_main">
    //   {/* <div className="messanger_nav"></div> */}
    //   <div className="messanger_body d-flex">
    //     <div className="messanger_chats">
    //       <div className="user_chater">
    //         <div className="user_image_con">
    //         </div>
    //         <div className="user_details_con">
    //           <div className="user_details_name">
    //             <b>Manish</b><span>12feb</span>
    //           </div>
    //           <div className="last_message_body">hii Manish</div>
    //         </div>
    //       </div>
    //        <div className="user_chater">
    //         <div className="user_image_con">
    //         </div>
    //         <div className="user_details_con">
    //           <div className="user_details_name">
    //             <b>Manish</b><span>12feb</span>
    //           </div>
    //           <div className="last_message_body">hii Manish</div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="messanger_message_con">
    //       <div className="messanger_message_box">
    //         <div className="message recieved"><div className="message_body">hii Manish</div> </div>
    //         <div className="message sended"><div className="message_body">hii </div> </div>
    //         <div className="message recieved"><div className="message_body">how are you </div> </div>
    //         <div className="message sended"><div className="message_body">fine</div> </div>
    //       </div>
    //       <div className="messanger_input_con">

    //         <input type="text" name="" id="" placeholder="Enter Your Message" />
    //         <button type="submit">Send</button>


    //       </div>
    //     </div>





    //   </div>
    // </div >

    <section style={{ backgroundColor: "#CDC4F9" }}>
      <div className="container py-5">

        <div className="row">
          <div className="col-md-12">

            <div className="card" id="chat3" style={{ borderRadius: "15px" }}>
              <div className="card-body">

                <div className="row">
                  <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 text-left">

                    <div className="p-3">

                      <div className="input-group rounded mb-3">
                        <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"
                          aria-describedby="search-addon" />
                        <span className="input-group-text border-0" id="search-addon">
                          <i className="fas fa-search"></i>
                        </span>
                      </div>

                      <div data-mdb-perfect-scrollbar="true" style={{ position: " relative", height: "400px" }}>
                        <ul className="list-unstyled mb-0">
                          <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Marie Horwitz</p>
                                  <p className="small text-muted">Hello, Are you there?</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Just now</p>
                                <span className="badge bg-danger rounded-pill float-end">3</span>
                              </div>
                            </a>
                          </li>
                          <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>
                          
                           <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>

                           <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>


                           <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>


                           <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>


                           <li className="p-2 border-bottom">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-warning badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Alexa Chung</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">5 mins ago</p>
                                <span className="badge bg-danger rounded-pill float-end">2</span>
                              </div>
                            </a>
                          </li>


                          <li className="p-2">
                            <a href="#!" className="d-flex justify-content-between">
                              <div className="d-flex flex-row">
                                <div>
                                  <img
                                    src={img1}
                                    alt="avatar" className="d-flex align-self-center me-3" width="60" />
                                  <span className="badge bg-success badge-dot"></span>
                                </div>
                                <div className="pt-1">
                                  <p className="fw-bold mb-0">Ben Smith</p>
                                  <p className="small text-muted">Lorem ipsum dolor sit.</p>
                                </div>
                              </div>
                              <div className="pt-1">
                                <p className="small text-muted mb-1">Yesterday</p>
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>

                    </div>

                  </div>



                  {/* messsage box */}






                  <div className="col-md-6 col-lg-7 col-xl-8">

                    <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true"
                      style={{ position: "relative", height: "400px" }}>



                      <div className="d-flex flex-row justify-content-end">
                        <div className="d-flex flex-column justify-content-end" style={{ textAlign: "left", width: "50%" }}>
                          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary" >
                            <p className="text-right">
                              Ut enim ad minim veniam,
                              quis
                              nostrud exercitation ullamco laboris
                              nisi ut aliquip ex ea commodo consequat.
                            </p>
                          </p>
                          <p className="small me-3 mb-3 rounded-3 text-muted text-right">12:00 PM | Aug 13</p>
                        </div>

                      </div>





                      <div className="d-flex flex-row justify-content-start">

                        <div className="d-flex flex-column justify-content-start">
                          <p className="small p-2 ms-3 mb-1 rounded-3" style={{ backgroundColor: "#f5f6f7", textAlign: "left", width: "50%" }}>


                            <p className="text-left" >
                              Sed ut
                              perspiciatis
                              unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                              rem
                              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                              dicta
                              sunt explicabo.
                            </p>
                          </p>
                          <p className="small ms-3 mb-3 rounded-3 text-muted float-end  text-left">12:00 PM | Aug 13</p>
                        </div>
                      </div>







                    </div>

                    <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">

                      <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2"
                        placeholder="Type message" />
                      <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip"></i></a>
                      <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile"></i></a>
                      <a className="ms-3" href="#!"><i className="fas fa-paper-plane"></i></a>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

  )
}
