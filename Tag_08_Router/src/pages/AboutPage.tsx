import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutPic from "../assets/images/About.png"

export default function AboutPage(){

    return(
        <>
            <NavBar/>
            <section className="about">
                <div className="aboutText">
                    <p style={{
                        fontSize: "40px", fontWeight:"bold"
                    }}>Who we are</p>

                    <p style={{fontSize: "80px", fontWeight:"bold", color:"gray"}}>ABOUT US</p>
                </div>
                <div className="imageAbout">
                    <img src={aboutPic} alt="" />
                    <div>
                        <p style={{fontSize:"25px"}}>
                            <span style={{fontSize:"30px",fontWeight:"bold"}}>WOODIES</span> is the 
                            <span style={{fontSize:"30px",fontWeight:"bold"}}> home of modern wooden furniture</span>
                        </p>
                        <p style={{fontSize:"20px",fontWeight:"bold"}}>the answer to your need for furniture with shapes, sizes and colors. </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}