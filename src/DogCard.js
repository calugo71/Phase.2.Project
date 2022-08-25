import React, { useState } from "react";
import {Card, CardImg, CardText, CardBody, CardTitle, Button} from "reactstrap";
function DogCard({dog, setFocusDog, removeDog}) {
const [showDogText, setShowDogText]=useState(false)
const {id, name, bred_for, } = dog
function handleDelete() {
  fetch(`http://localhost:3000/dogs/${id}`, {
    method: 'DELETE'
})
.then(res => res.json())
.then(()=> removeDog(id))
}
let handleClick = () => {
  setFocusDog(dog)
}
    return (
      <>
        <div class="col-4">
        <Card style={{padding: "5px"}}>
          <CardImg top width="100%" style={{height: "285px"}} src={dog.image} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ fontWeight: "bold", cursor: "pointer" }}
            onClick={()=>setShowDogText(prevState=>!prevState)}>{dog.name}</CardTitle>
            <Button onClick={handleDelete}>Adopt Me 🥹</Button>
            {showDogText ? <CardText>
              This dog enjoys {dog.bred_for}! They can live for an additional {dog.life_span} years, and are often found acting {dog.temperament}.
            </CardText>:null}
          </CardBody>
        </Card>
        </div>
      </> 
    );
  }
  export default DogCard