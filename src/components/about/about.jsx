import React from 'react'
import './about.css'

export default function About() {
  return (
    <div>
      <div className="aboutMedol mb-4 d-flex  flex-nowrap align-items-center justify-center">
        <div className="blue d-flex justify-content-center align-items-center">
          <div className="fiolet d-flex justify-content-center align-items-center">
            <div className="cyan d-flex justify-content-center align-items-center">
              <img src="./assets/medol.png" className='w-75' alt="" />
            </div>
          </div>
        </div>
        <div className="aboutTitle">
          <p className='text-justify p-3'>
            Группа компаний MEDOL <br /> создавалась высококвалифицированными специалистами в сфере медицины, инженерии и экономики, за плечами которых значительный опыт на рынке высоких медицинских технологий, которая имеет свои представительства в разных уголках Земли. В 2011 году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online Services". Цель компании построить прозрачный долгосрочный бизнес, принести пользу обществу путем развития и внедрения передовых технологий в систему здравоохранения Республики Узбекистан. 
          </p>
          <button className='aboutBtn mt-3 d-block mx-auto'>Узнать больше</button>
        </div>
      </div>
    </div>
  )
}
