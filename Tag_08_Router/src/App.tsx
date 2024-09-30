import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";

export default function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path: "/about",
      element: <AboutPage/>
    },
    {
      path: "/products",
      element: <ProductsPage/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )

}