import getHeroesByPublisher from "../../selectors/getHeroesByPublisher"
import HeroeCard from "./HeroeCard"
import {useMemo} from "react"

const HeroesList = ({publisher}) => {

   const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])



    return (
        <div className="card-column animate__animated animate__fadeIn">
            {heroes.map((heroe)=>(  

                <HeroeCard key={heroe.id} {...heroe}/>

            ))                
            }


        </div>
    )
}

export default HeroesList
