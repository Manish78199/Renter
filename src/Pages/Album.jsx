import S1 from "./Static/img/S1.jpg"
import S2 from "./Static/img/S2.jpg"
import S3 from "./Static/img/S3.jpg"
export default function Album() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={S1} className="d-block w-100" alt="..." style={{width:"800px",height:"450px"}}/>
    </div>
    <div className="carousel-item">
      <img src={S2} className="d-block w-100" alt="..."style={{width:"800px",height:"450px"}} />
    </div>
    <div className="carousel-item">
      <img src={S3} className="d-block w-100" alt="..."  style={{width:"800px",height:"450px"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
