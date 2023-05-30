import React from 'react'
import {Link} from 'react-router-dom'
import './uslugi.css'

export default function Uslugi(props) {
  return (
    <div className='cardUslugi text-center mb-5'>
      <div className="imageUslugi mb-4">
        <img src={props.image} alt="" />
      </div>
      <Link to='/'>{props.link}</Link>
      <div className="cardTitl px-5 mt-2">
        <p>
          {props.title}
        </p>
      </div>
      <button>Подробнее</button>
    </div>
  )
}
