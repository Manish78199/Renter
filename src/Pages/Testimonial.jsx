import "./Static/Common.css"
import SF1 from "./Static/img/SF1.jpg"
import SF2 from "./Static/img/SF2.webp"
// import SF3 from "./Static/img/SF2.jpg"

export default function Testimonial() {
    const AuthStyle = {
        width: '100px',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50%',
        height: '100px',

    }
    return (
        <div>
            <div className="" style={{ width: "100%", height: "500px", backgroundColor: "#f6da0a", display: "flex" }}>
                <h1 style={{
                    color: '#00094a',
                    fontWeight: 'bold',
                    fontSize: '60px',
                    marginTop: '90px',
                    marginLeft: '50px'
                }}>How We Help To Our Client ?</h1>
            </div>
            <div className="" style={{
                display: 'flex',
                flexDirection: 'row',
                
                position: 'absolute',
                width: '100%',
                justifyContent: 'center',
                marginTop: '-200px',
                alignItems: 'center',
                columnGap: '20px'
            }}>

                <div className="Testi_card" >
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <div className="Image_con">
                        <div className="Image_con_inner" style={{
                            backgroundColor: '#eedfcc',
                            width: '100px',
                           backgroundPosition: 'center bottom',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50%',
                            height: '100px',
                             backgroundImage: "url(" + SF1 + ")"
                        }}>

                        </div>
                    </div>
                    <div className="Testi_author_con">
                        <b>Renter</b>
                        <p>Manish</p>
                    </div>

                </div>
                <div className="Testi_card" >
                    <p >Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <div className="Image_con">
                        <div className="Image_con_inner" style={{
                            backgroundColor: '#8d8080',
                            width: '100px',
                           backgroundPosition: 'center bottom',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50%',
                            height: '100px',
                            backgroundImage: "url(" + SF2 + ")"
                        }}>

                        </div>
                    </div>
                    <div className="Testi_author_con"></div>

                </div>
                <div className="Testi_card" >
                    <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <div className="Image_con">
                        <div className="Image_con_inner" style={{
                            backgroundColor: '#8d8080',
                            width: '100px',
                            backgroundPosition: 'center bottom',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            borderRadius: '50%',
                            height: '100px', backgroundImage: "url(" + SF2 + ")"
                        }}>

                        </div>
                    </div>
                    <div className="Testi_author_con"></div>

                </div>
            </div>
            <div className="" style={{ width: "100%", height: "500px", backgroundColor: "#f2f2f2" }}></div>
        </div>
    )
}
