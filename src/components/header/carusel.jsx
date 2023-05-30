// import Carousel from 'react-bootstrap/Carousel';
import Slider from "react-slick";
import "./carusel.css"
function Karusel() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
      <div className="main-carousel">
            <div className="container-fluid mx-auto mt-2  ">
              <Slider {...settings} style={{"width": "88%"}} className="mx-auto">
                  <div className="row d-flex forwrap">
                    <div className="col-12 col-sm-6 carousel-text">
                      <div className="text-title">
                        <h2>Анализатор <br/>ABL800 FLEX</h2>
                      </div>
                      <div className="text-body">
                        <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                      </div>
                      <div className="text-link">
                          <a href="/" className="btn btn-primary forbtn">
                              Подробнее
                          </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 carousel-img">
                      <img src="./assets/carousel/slide1.png" alt="" />
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-12 col-sm-6 carousel-text">
                      <div className="text-title">
                        <h2>Анализатор <br/>ABL800 FLEX</h2>
                      </div>
                      <div className="text-body">
                        <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                      </div>
                      <div className="text-link">
                          <a href="/" className="btn btn-primary forbtn">
                              Подробнее
                          </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 carousel-img">
                      <img src="./assets/carousel/slide1.png" alt="" />
                    </div>
                  </div>
                  <div className="row d-flex">
                    <div className="col-12 col-sm-6 carousel-text">
                      <div className="text-title">
                        <h2>Анализатор <br/>ABL800 FLEX</h2>
                      </div>
                      <div className="text-body">
                        <p>Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии</p>
                      </div>
                      <div className="text-link">
                          <a href="/" className="btn btn-primary forbtn">
                              Подробнее
                          </a>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6 carousel-img">
                      <img src="./assets/carousel/slide1.png" alt="" />
                    </div>
                  </div>             
              </Slider>
            </div>
        
      </div>
  );
}

export default Karusel;





