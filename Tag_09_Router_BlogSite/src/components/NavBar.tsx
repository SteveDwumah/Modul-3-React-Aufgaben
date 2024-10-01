import { NavLink } from "react-router-dom"

export default function NavBar (){
    return(
            <header>
                <div>
                    <h1>My Life</h1>
                </div>
                <div className="navigation">
                    <NavLink to="/">Home</NavLink>{" "}
                    <NavLink to="/blog">Blog</NavLink>
                </div>
            </header>
    )
}