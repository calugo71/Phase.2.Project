import React, { useState } from "react";
import DogCard from "./DogCard"
import {CardDeck} from "reactstrap";
import FocusDog from "./components/FocusDog.jsx"

function Home({dogs,removeDog}){
const [focusDog, setFocusDog]=useState({
    name: "",
    bred_for: "",
    life_span: "",
    temperament: "",
    image: ""
})
return(
    <div style={{backgroundColor: '#DFDDCB'}}>
        <CardDeck className="card-container" style={{backgroundColor: '#DFDDCB'}}>
        {dogs.map((dog=><DogCard key={dog.id} dog={dog} removeDog={removeDog}setFocusDog={setFocusDog} />)) }
        </CardDeck>
            <div style={{backgroundColor: '#DFDDCB'}} className="info-box">
            <span style={{backgroundColor: '#DFDDCB'}} className="button square closer"></span>
            <FocusDog style={{backgroundColor: '#DFDDCB'}} data={focusDog}/>
            </div>
    </div>
)
}
export default Home;