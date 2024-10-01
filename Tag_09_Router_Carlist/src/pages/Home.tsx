import { NavLink } from "react-router-dom"
import { cars } from "../data/cars"

export default function Home(){
    return(
        <div>
            {cars.map((car) =>(
                <div>
                    {car.CarMake}
                    <NavLink to={`/details/${car.CarMake}`}>Read more</NavLink>
                </div>
            ))}
        </div>
    )
}