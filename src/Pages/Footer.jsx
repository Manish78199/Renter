

import "./Static/Common.css"
export default function Footer() {
  return (
    <div style={{ width: "100%", backgroundColor: "#333333"}}>
      <footer className="container py-4" >
        <div className="row">

          <div className="col-5 ">
            <div className="col-10 ">
              <p style={{ color: "white" }}>Renter Provide best service for taking and giving shop ,Showroom and plcae on rent</p>
              <b style={{ color: "white" }}>Renter.Com</b>
              <address style={{ color: "white" }}>
                Vill pawli khurd
              </address>
            </div>


          </div>
          <div className="col-3  footer_table">
            <h5 style={{ color: "white" }}>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><a className="footer_link" href="#">Resource</a></li>
              <li><a className="footer_link" href="#">Resource name</a></li>
              <li><a className="footer_link" href="#">Another resource</a></li>
              <li><a className="footer_link" href="#">Final resource</a></li>
            </ul>
          </div>

          <div className="col-3  footer_table">
            <h5 style={{ color: "white" }}>About</h5>
            <ul className="list-unstyled text-small">
              <li><a className="footer_link" href="#">Team</a></li>
              <li><a className="footer_link" href="#">Locations</a></li>
              <li><a className="footer_link" href="#">Privacy</a></li>
              <li><a className="footer_link" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
