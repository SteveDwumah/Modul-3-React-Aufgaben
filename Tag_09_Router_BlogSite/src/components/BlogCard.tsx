import NavBar from "./NavBar"

interface BlogCardProps {
    title: string,
    published: string,
    author: string,
    description: string,
    imgUrl: string

  }

  export default function BlogCard({
    title,
    published,
    author,
    description,
    imgUrl
    }: BlogCardProps){
        return(<>
            <NavBar/>
            <div>
                <img src={imgUrl} alt="" />
            </div>
            <div>
                <div>
                    <h3>{title}</h3>
                    <p>{published}</p>
                </div>
                <div>
                    <p>{description}</p>
                    <p>{author}</p>
                </div>
            </div>
        </>
            
        )
    }