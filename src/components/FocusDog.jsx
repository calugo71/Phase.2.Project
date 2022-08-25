import React from 'react'

export default function FocusDog({data}) {
  return (
    <div type="text" className="info-box-content">
      <h3 id="info-header">{data.name}</h3>
       <p id="info-body+">{data.bred_for}</p>
       <p id="info-body+">{data.life_span}</p>
       <p id="info-body+">{data.temperament}</p>
    </div>
  )
}