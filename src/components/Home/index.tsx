import { Header } from "../Header/index";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import specialCoffeeImg from "../../assets/special_coffee.png";
import acessoriesImg from "../../assets/acessories.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function Home() {
 
  //choose the screen size 
  const handleResize = () => {
    if (window.innerWidth < 720) {
      const slidesNumber = 1.25
      return slidesNumber
    } else {
      const slidesNumber = 2
      return slidesNumber
    }
  }
  
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  
  return (
    <Container>
      <Header />
      <Swiper spaceBetween={20} slidesPerView={handleResize()}>
        <SwiperSlide>
          <Link to="/cafe">
            <div className="card">
              <img src={specialCoffeeImg} alt="Café especial" />
              <h1>Cafés especiais</h1>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link to="/acessorios">
            <div className="card">
              <img src={acessoriesImg} alt="Acessórios para café" />
              <h1>Acessórios</h1>
            </div>
          </Link>
        </SwiperSlide>
      </Swiper>

      <div className="light">
        <div className="fullBulb">
        <div className="bulb">
          <span></span>
          <span></span>
        </div>
        </div>
      </div>
    </Container>
  );
}
