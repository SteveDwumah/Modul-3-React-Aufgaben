import { NavLink } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function Home(){
    return(
        <>
            <div>
                <NavBar/>
            </div>
            <div>
                <h2>Welcome to my simple Blog</h2>
                <NavLink to="/articles">Got to articles</NavLink>
            </div>
        </>
    )
}