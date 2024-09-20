import animals from "./data";
import AnimalItem from "./AnimalItem";

function ListAnimals(){
    return(
        <div>
            {animals.map(({name, species, habitat, lifespan, diet, funFacts, emoji})=>(
                <AnimalItem key={name} name={name} species={species} habitat={habitat} lifespan={lifespan} diet={diet} funFacts={funFacts} emoji={emoji}
                />
            ))}
        </div>
    )
}
export default ListAnimals