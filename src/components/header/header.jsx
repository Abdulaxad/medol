import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Karusel from './carusel';


export default function Header() {
  const [menyu, setMenyu] = useState(false);

  const Show=()=>{
    setMenyu(!menyu)
  }
  return (
    <div className='header'>
      <header className={menyu ? "open" : ""}>
        {/* Faqat mobil formatda ko'rinadigan qism */}
        <div className="mobil d-md-none d-flex justify-content-between align-items-center">
          <div className={menyu ? "d-none " : "d-block d-md-none position-absolute top-25 isopen"}>
            <img src="./assets/medol.png" className='w-25 d-block mx-auto my-2' alt="" />
          </div>
          <button className='close border px-1' onClick={Show}>
            {menyu ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </button> 
        </div>
        {/* Top panle boshlanishi */}
        <div className={menyu ? "head" : "head openMenyu"}>
          <div className="topPanel d-flex justify-content-center align-items-center">
            <div className="logo d-block d-md-none w-100">
              <img src="./assets/medol.png" className='w-50 d-block mx-auto' alt="" />
            </div>
            <div className="location d-flex align-items-center">
              <i className="bi bi-geo-alt-fill px-3 py-2 text-primary rounded-circle bg-white"></i>
              <span>
                <p>г.Ташкент, Чиланзар</p>
                <p>10 квартал, дом 3/1</p>
              </span>
            </div>
            <div className="tel d-flex align-items-center">
              <i className="bi bi-telephone-plus px-3 py-2 text-primary rounded-circle bg-white"></i>
              <span>
                <p>+998 71 276-62-53</p>
                <p>+998 71 276-62-54</p>
              </span>
            </div>
            <div className="logo d-none d-md-block w-25">
              <img src="./assets/medol.png" className='w-50 d-block mx-auto' alt="" />
            </div>
            <div className="search mt-2">
              <input type="search" placeholder='Search...' />
              <button className='btn'>
                <i className="bi bi-search"></i>
              </button>
            </div>
            <div className="facebook bg-white py-2 px-4  rounded-pill d-flex">
              <i className="bi bi-facebook text-primary me-1"></i>
              <Link to="/">Мы на Facebook</Link>
            </div>
            <div className="lang">
              <select name="" id="" className='border-0 bg-white p-2 pe-3 rounded-pill outline-0'>
                <option value="">Русский</option>
                <option value="">English</option>
                <option value="">Uzbek</option>
              </select>
            </div>
          </div>
          {/* Menyu boshlanishi */}
          <nav >
            <ul className='row row-cols-md-6 row-cols-1'>
              <li><Link to='/'>МАГАЗИН</Link></li>
              <li><Link to='/'>О КОМПАНИИ</Link></li>
              <li><Link to='/'>ПРОДУКЦИЯ</Link></li>
              <li><Link to='/'>УСЛУГИ</Link></li>
              <li><Link to='/'>АКЦИИ И НОВОСТИ</Link></li>
              <li><Link to='/'>ОБРАТНАЯ СВЯЗЬ</Link></li>
            </ul>
          </nav>
        </div>        
      </header>
      <div className="main-slider">
        
        {/* Carusel */}
          <Karusel />
        
      </div>
      
    </div>
  )
}
