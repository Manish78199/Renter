import cimage from "./Static/img/Cover.jpg"
import "./Static/Navbar.css"

export default function CoverPage({search}) {
  function getStarted(e){
   e.preventDefault()
   window.scrollTo({top:0,behavior:"smooth"})
   search.current.focus()
  
  
  }
  return (
    <div style={{display:"flex"}}>
      <div className='right_cover' style={{ width: '45%'}}></div>
      <div className="cover-container d-flex h-600 p-3 flex-column" style={{ height: "600px" ,justifyContent: 'center'}}>

        
        <main role="main" className="inner cover" style={{textAlign:"left"}}>
          <h1 className="cover-heading" >Find Your Place.</h1>
          <p className="lead" >Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p className="lead">
            <button className="btn btn-lg btn-primary" onClick={getStarted}>Get Started</button>
          </p>
        </main>

      </div>
      
    </div>
  )
}
