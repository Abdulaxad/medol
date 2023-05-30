import React from 'react'
import Slider from 'react-slick'
import "./partners.css"

export default function Partners() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1500,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive: [
        
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <>
      <div className="partners container-fluid">
        <div className="partners-title hover_effect">
          <h1><span>ПАРТНЕРЫ</span></h1>
        </div>
        <div className="partners-body container">
          <Slider {...settings}>
            <div className="card">
              <div className="card-body1 m-3">
                <img src="./assets/partners/part1.1.jpg" alt="" />
              </div>
              <div className="card-body2 m-3">
                <img src="./assets/partners/part1.2.jpg" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body1 m-3">
                <img src="./assets/partners/part2.1.jpg" alt="" />
              </div>
              <div className="card-body2 m-3">
                <img src="./assets/partners/part2.2.jpg" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body1 m-3">
                <img src="./assets/partners/part3.1.jpg" alt="" />
              </div>
              <div className="card-body2  m-3">
                <img src="./assets/partners/part3.2.jpg" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body1 m-3">
                <img src="./assets/partners/part4.1.jpg" alt="" />
              </div>
              <div className="card-body2 m-3">
                <img src="./assets/partners/part4.2.jpg" alt="" />
              </div>
            </div>
            <div className="card">
              <div className="card-body1 m-3">
                <img src="./assets/partners/part4.1.jpg" alt="" />
              </div>
              <div className="card-body2 m-3">
                <img src="./assets/partners/part4.2.jpg" alt="" />
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </> 
  )
}
