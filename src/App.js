import React, { useState, useEffect } from 'react';
import AdoptionForm from './AdoptionForm';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import Video from './components/Video'
import './App.css';
function App() {
const [dogs, setDogs] = useState([])
useEffect(() => {
    const fetcher = () => {
        fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(data =>
            setDogs(data))}
fetcher()
}, []);
function removeDog(id) {
    const result = dogs.filter(dog => dog.id !== id)
    setDogs(result)
}
return (
    <>
        <nav className="navigation">
            <Header />
            <div className='nav-links'>
                <Link style={{color: 'white'}} to="/">Home</Link>
                <Link style={{color: 'white'}} to="/AdoptionForm">Add Doggie</Link>
                <Link style={{color: 'white'}} to="/Contact">About</Link>
                <Link style={{color: 'white'}} to="./components/video">Video</Link>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<Home removeDog={removeDog} dogs={dogs} />} />
            <Route path="/AdoptionForm" element={<AdoptionForm setDogs={setDogs} dogs={dogs} />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/components/Video" element={<Video />} />
        </Routes>
    </>
);
}

export default App;
