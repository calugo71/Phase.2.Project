import React from "react";

function DogCard({dog}) {
  
    return (
      <li className="dog">
        <h4>{dog.name}</h4>
        <img src={dog.image} width="200" height="200"></img>
      </li>
    );
  }
  
  export default DogCard;
  