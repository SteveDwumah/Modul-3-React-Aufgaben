import { NavLink } from "react-router-dom"
import logo from"../assets/images/Logo (1).png"
 

export default function NavBar (){
    return(
            <header>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>{" "}
                    <NavLink to="/about">About Us</NavLink>{" "}
                    <NavLink to="/products">Products</NavLink>
                </div>
            </header>
    )
}