import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
    
  },
  {
  path:"/details/:name",
  element: <CarDetails/>
  }])

  export default function App() {
    return <RouterProvider router={router} />;
  }