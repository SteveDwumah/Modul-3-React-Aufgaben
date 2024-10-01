import { NavLink } from "react-router-dom";
import { blogData } from "../components/BlogPost";
import NavBar from "../components/NavBar";


export default function BlogPage(){

    return(
        <div>
            <NavBar/>
            {blogData.map((blog)=> (
                <div key={blog.id}>
                    <img src={blog.img_url} alt="" />
                    <h3>{blog.title}</h3>
                    <NavLink to={`/blog/${blog.title}`}>Read More</NavLink>

                </div>
            ))}
        </div>
    )
}