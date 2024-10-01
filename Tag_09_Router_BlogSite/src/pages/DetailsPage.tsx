import { useParams } from "react-router-dom"
import { blogData } from "../components/BlogPost"
import BlogCard from "../components/BlogCard";

const getBlog = (title: string) => {
    return blogData.find((blog)=> blog.title === title)
}

export default function BlogDetails(){
    const {title} = useParams();
    const blog = getBlog(title!)
    if(!blog){
        return "404 no Blog"
    }
    return(
        <div>
            <BlogCard
            title={blog.title}
            published={blog.published_date}
            author={blog.author}
            description={blog.description}
            imgUrl={blog.img_url}
            />
        </div>
    )
}