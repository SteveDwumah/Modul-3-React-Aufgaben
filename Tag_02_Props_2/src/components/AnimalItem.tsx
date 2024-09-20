import { Animal } from "./data";

function AnimalItem(props: Animal){
    return(
    
    <div>
        
            {props.emoji} {props.name} {props.species} {props.habitat} {props.lifespan} {props.diet} {props.funFacts}
    </div>
    
    )
}
export default AnimalItem