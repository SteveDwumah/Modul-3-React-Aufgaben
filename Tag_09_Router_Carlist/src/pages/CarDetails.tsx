import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/cars";



const getCar = (name: string) => {
    return cars.find((car) => car.CarMake === name);
}

export default function CarDetails(){

    const {name} = useParams();
    const car = getCar(name!);
    if(!car){
        return "404 no car"
    }
    return(
        <div>
            <CarCard 
                carMake={car.CarMake}
                carModel= {car.carModel}
                carYear= {car.CarYear}
            />
        </div>
    )
}
