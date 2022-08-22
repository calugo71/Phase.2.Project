import React, { useState, useEffect } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import AdoptionForm from './AdoptionForm';

import './App.css';

function App() {

  const [dogs, setDogs]=useState([])

  useEffect(()=>{
    fetch('http://localhost:3000/dogs')
    .then(res=>res.json())
    .then(data=>setDogs(data))
    .catch(error=>console.log(error))
}, []);

return(
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/AdoptionForm">Adoption Form</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home dogs={dogs} />} />
            <Route path="/AdoptionForm" element={<AdoptionForm/>} />
        </Routes>
    </>
);

}

export default App;
