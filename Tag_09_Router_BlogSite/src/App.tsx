import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./pages/DetailsPage";

export default function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path:"/blog",
      element: <BlogPage/>
    },
    {
      path:"/blog/:title",
      element: <BlogDetails/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )

}