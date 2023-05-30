import React from 'react'
import './produksiya.css'

export default function Produksiya(props) {
  return (
    <div className='d-flex justify-content-center'>
      <div className="prodCard">
        <div className="cardImage mx-auto">
          <img src={props.img} alt={props.name} />
        </div>
        <h1 className='cardTaytl mx-auto text-center'>
          {props.name}
        </h1>
        <button className='cardBtn mx-auto mt-5'>Посмотреть все</button>
      </div>
    </div>
  )
}
