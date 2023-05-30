import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  return (
    <div className='footer pt-5'>
      <div className="content row">

        {/* Chap tomonning boshlanishi */}

        <div className="col-md-6 col-12 left">
          <div className="row">
            <div className="col-md-4 col-12 text-center">
              <h1 className='contact'>Контакты</h1>
            </div>
            <div className="col-md-4 col-12">
              <div className="location d-flex align-items-center justify-content-center">
                <i className="bi bi-geo-alt-fill px-3 py-2 text-primary rounded-circle bg-white"></i>
                <span>
                  <p>г.Ташкент, Чиланзар</p>
                  <p>10 квартал, дом 3/1</p>
                </span>
              </div>
              <div className="pochta col-md-4 col-12 mx-auto w-100 text-center">
                <Link to='/'>
                  <i className="bi bi-envelope-fill px-3 py-2 text-primary rounded-circle bg-white"></i>
                  info@medol.uz
                </Link>  
              </div>
            </div>
            <div className="col-md-4 col-12 ">
              <div className="tel d-flex align-items-center justify-content-center">
                <i className="bi bi-telephone-plus px-3 py-2 text-primary rounded-circle bg-white"></i>
                <span>
                  <p>+998 71 276-62-53</p>
                  <p>+998 71 276-62-54</p>
                </span>
              </div>
              <button className='footerBtn mt-3 d-block mx-auto'>Оставить заявку</button>
            </div>
          </div>
          <div className="nashsel row my-5">
            <div className="col-md-4 col-12">
              <div className="footerLogo">
                <img src="./assets/medol.png" className='w-50 d-block mx-auto' alt="" />
              </div>
            </div>
            <div className="col-md-8 col-12 text-center">
              <p>
                Наша цель – построить прозрачный, долгосрочный бизнес, приносить огромную пользу населению, путем решения глобальных вопросов. Внедряя инновационные технологии на рынок Узбекистана.
              </p>
            </div>
          </div>
        </div>

        {/* O'ng tomonning boshlanishi */}

        <div className="col-md-6 col-12 right">
          <div className="row">
            <div className="col-md-4  col-12 ssilki">
              <h3>О компании</h3>
              <ul>
                <li><Link to='/'>История</Link></li>
                <li><Link to='/'>Партнеры</Link></li>
                <li><Link to='/'>Вакансии</Link></li>
              </ul>
            </div>
            <div className="col-md-4 col-12 ssilki">
            <h3>Продукция</h3>
              <ul>
                <li><Link to='/'>Эндоваскулярная хирургия</Link></li>
                <li><Link to='/'>Аритмология</Link></li>
                <li><Link to='/'>Кардиохирургия</Link></li>
                <li><Link to='/'>Лабораторная диагностика</Link></li>
                <li><Link to='/'>Хирургия</Link></li>
                <li><Link to='/'>Эндоурология</Link></li>
                <li><Link to='/'>Нейрохирургия</Link></li>
                <li><Link to='/'>Анестезиология и реанимация</Link></li>
                <li><Link to='/'>Диабет</Link></li>
              </ul>
            </div>
            <div className="col-md-4 col-12 ssilki">
            <h3>Услуги</h3>
              <ul>
                <li><Link to='/'>Сервис</Link></li>
                <li><Link to='/'>Регистрации</Link></li>
                <li><Link to='/'>Услуги логистики</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Eng pastki qism */}

      <div className="row justify-content-between mt-5">
        <div className="col-8 col-md-6 mx-auto">
          <p className='text-center'>© 2021 ООО «Medical Online Services»</p>
        </div>
        <div className="col-8 col-md-6 mx-auto">
          <p className='text-center d-xl-flex justify-content-center'>
            <span>Дизайн сделан: </span>
            <Link> damingues92@gmail.com</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
