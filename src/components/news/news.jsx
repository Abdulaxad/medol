import React from 'react'
import Slider from "react-slick"
import "./news.css";

export default function News() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        pauseOnHover: true,
        // initialSlide: 0,
        responsive: [
          {
            breakpoint: 1440,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 1040,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <>
        <div className="container-fluid news">
            {/* <div className=""> */}
                <div className="news-title hover_effect">
                    <h1 className='text-center'>НОВОСТИ</h1>
                </div>
                <div className="news-body">
                    <Slider {...settings}>
                        <div className="card" >
                            <img src="./assets/news/news1.jpg" className="card-img-top" alt="docs_image"/>
                            <div className="card-body">
                                <a href="/" className="card-title">Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a>
                                <h4>26.07.2021</h4>
                                <p className="card-text">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                                <a href="/" className="btn btn-primary linked">Подробнее</a>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/news/news1.jpg" className="card-img-top" alt="docs_image"/>
                            <div className="card-body">
                                <a href="/" className="card-title">Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a>
                                <h4>26.07.2021</h4>
                                <p className="card-text">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                                <a href="/" className="btn btn-primary linked">Подробнее</a>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/news/news1.jpg" className="card-img-top" alt="docs_image"/>
                            <div className="card-body">
                                <a href="/" className="card-title">Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a>
                                <h4>26.07.2021</h4>
                                <p className="card-text">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                                <a href="/" className="btn btn-primary linked">Подробнее</a>
                            </div>
                        </div>
                        <div className="card" >
                            <img src="./assets/news/news1.jpg" className="card-img-top" alt="docs_image"/>
                            <div className="card-body">
                                <a href="/" className="card-title">Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича</a>
                                <h4>26.07.2021</h4>
                                <p className="card-text">С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский Специализированный Научно-Практический Медицинский Центр Урологии) при поддержке компаний Ethicon Endo Surgery (Johnson&Johnson) и ИП ООО «Medical Online Services» был проведен мастер-класс в исполнении...</p>
                                <a href="/" className="btn btn-primary linked">Подробнее</a>
                            </div>
                        </div>
                    </Slider>
                </div>
                <div className="news-link">
                    <div className="d-flex justify-content-around mt-3 forflex">
                        <div className="text-center mt-2">
                            <a href="/">Посмотреть все новости
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"></path><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"></ path></svg>
                            </a>
                        </div>
                        <div className="text-center mt-2">
                            <a href="/" className='last'>Подписаться на новости
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M210.7 147.6c7.5-7.5 19.8-7.5 27.3 0l95.4 95.7c7.3 7.3 7.5 19.1.6 26.6l-94 94.3c-3.8 3.8-8.7 5.7-13.7 5.7-4.9 0-9.9-1.9-13.6-5.6-7.5-7.5-7.6-19.7 0-27.3l79.9-81.1-81.9-81.1c-7.6-7.4-7.6-19.6 0-27.2z"></path><path d="M48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256zm32 0c0-47 18.3-91.2 51.6-124.4C164.8 98.3 209 80 256 80s91.2 18.3 124.4 51.6C413.7 164.8 432 209 432 256s-18.3 91.2-51.6 124.4C347.2 413.7 303 432 256 432s-91.2-18.3-124.4-51.6C98.3 347.2 80 303 80 256z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

            {/* </div> */}
        </div>
    </>
  )
}
