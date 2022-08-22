import React from "react";
import DogCard from "./DogCard"

function Home({dogs}){
    return(
        <div>
            <h1>"Brandon and Carlos' Dogs"</h1>
            <ul>
                {dogs.map((dog=><DogCard key={dog.id} dog={dog} />)) } 
            </ul>
        </div>
    )
}

export default Home;