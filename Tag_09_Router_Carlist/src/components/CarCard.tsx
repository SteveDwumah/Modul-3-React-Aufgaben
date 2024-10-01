interface CarCardProps {
    carModel: string,
    carMake: string,
    carYear: number
  }

  export default function CarCard({
    carModel,
    carMake,
    carYear
    }: CarCardProps){
        return(
            <div>
                <p>{carMake}</p>
                <p>{carModel}</p>
                <p>{carYear}</p>
            </div>
        )
    }