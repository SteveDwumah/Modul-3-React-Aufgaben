import footerPic from "../assets/images/Footer.png"
import logo from "../assets/images/Logo (1).png"

export default function Footer(){
    return(
        <footer>
            <div className="footerDiv">
            <img src={logo} alt="" />
            <p>(012) 8967453</p>
            <p>woodies@gmail.com</p>
            <p>Jakarta, Indonesia</p>
            </div>
            <img src={footerPic} alt="" />
        </footer>
    )
}