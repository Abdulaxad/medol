import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import product from './product.json'
import uslugi from './uslugi.json'
import News from "../components/news/news";
import Partners from "../components/partners/partners";
import { Link } from 'react-router-dom';
import Produksiya from '../components/product/produksiya';
import Header from '../components/header/header';
import Uslugi from '../components/uslugi/uslugi';
import About from '../components/about/about';
import Footer from '../components/footer/footer';

export default function Home() {

  useEffect(() =>{
    AOS.init();
  })

  return (
    <div className='home overflow-hidden'>
      <Header />
      <div className="product" data-aos="fade-up" data-aos-duration="1000">
        <div className="product-title">
          <h1 className='text-center my-5 pr hover_effect'>ПРОДУКЦИЯ</h1>
        </div>
        <div className="produksiya row row-cols-xl-3 row-cols-md-2 row-cols-1">
          {
            product.map(item=>(
              <Produksiya key={Math.random()*100} name={item.name} img={item.img}  />
            ))
          }
        </div>
        <h4 className='text-center pereyti'>
          <Link to='/'>
            <span className='pereyti-title'>Перейти в каталог нашей продукции 
              <i className="bi bi-arrow-right-circle mx-2"></i>
            </span>
          </Link>
        </h4>
      </div>
      <div className="uslugalar" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
        <div className="uslugalar-title">
          <h1 className='text-center my-5 hover_effect'>УСЛУГИ</h1>
        </div>
        <div className="uslugi d-flex justify-content-around">
          {
            uslugi.map(elem=>(
              <Uslugi key={Math.random()*100} link={elem.link} title={elem.title} image={elem.image}/>
            ))
          }
        </div>
      </div>
      <div className="aboutCompany" data-aos="zoom-out-up" data-aos-anchor-placement="top-bottom">
        <div className="about-title">
          <h1 className='text-center my-5 hover_effect'>О КОМПАНИИ</h1>
        </div>
        <About />
      </div>
      <News/>
      <Partners/>
      <Footer />
    </div>
  )
}
