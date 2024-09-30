import NavBar from "../components/Navbar"
import homePic from "../assets/images/Home.png"


export default function HomePage(){
    return(
        <>
            <NavBar/>
            <section>
                <div className="homeDiv">
                    <p style={{fontSize: "30px"}}>Are you looking for <span style={{fontWeight: "bold"}}>woodden furniture</span> for your place?</p>
                    <h3 style={{fontSize: "50px"}}>This is the Right Place</h3>
                    <button style={{width: "150px", height:"50px", borderStyle: "none", backgroundColor:"#d6a812", borderRadius:"10px"}}>Explore Categories</button>
                </div>
                <img src={homePic} alt="" />
            </section>
        </>
    )
}