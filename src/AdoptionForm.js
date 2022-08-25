import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import myGif from './react-select-option-array.gif';

function AdoptionForm({setDogs,dogs}) {
  let navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    bred_for: '',
    life_span: '',
    temperament: '',
    image: ''
  })

  let handleChange = (e) => {
    e.preventDefault()
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:3000/dogs",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    .then(res=>res.json())
    .then(data=>setDogs([...dogs, data]))
    .then(()=>navigate("/"))
  }


    return(
      <div className="new-dog-form" style={{backgroundColor: '#DFDDCB'}}>
        <h2 className="adoption-form-text" style={{backgroundColor: '#DFDDCB'}}>Put your ready to be adopted dogs here!</h2>
        <form className="adoption-form" onSubmit={handleSubmit} style={{backgroundColor: '#DFDDCB'}}>
          <input className="adoption-element" value={form.name} onChange={handleChange} type="text" name="name" placeholder="Dog name" />
          <input className="adoption-element" value={form.bred_for} onChange={handleChange} type="text" name="bred_for" placeholder="Dog Profession" />
          <input className="adoption-element" value={form.life_span} onChange={handleChange} type="text" name="life_span" placeholder="Estimated Age" />
          <input className="adoption-element" value={form.temperament} onChange={handleChange} type="text" name="temperament" placeholder="Dog's Temperament" />
          <input className="adoption-element" value={form.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
          <button type="submit">🐶🐶🐶</button>
          <img src={myGif} alt="my-gif" />
        </form>
      </div>
    )
}

export default AdoptionForm;