import { Header } from '../Header/index'
import { Container } from './styles'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import specialCoffeeImg from '../../assets/special_coffee.png'
import acessoriesImg from '../../assets/acessories.png'

export function Home(){
    return(
        <Container>
            <Header/>
            <Swiper
      spaceBetween={20}
      slidesPerView={1.25}
    >
      <SwiperSlide>
        <div className='card'>
            <img src= {specialCoffeeImg} alt="Café especial" />
            <h1>Cafés especiais</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='card'>
            <img src={acessoriesImg} alt="Acessórios para café" />
            <h1>Acessórios</h1>
        </div>
      </SwiperSlide>
      
    </Swiper>
        </Container>
    )
}