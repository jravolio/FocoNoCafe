import { Container } from "./styles"
import { Header } from "../Header"
import prensa_francesa from "../../assets/prensa_francesa.png";
import cafeteira_italiana from '../../assets/cafeteira_italiana.png'
import V60_Hario from '../../assets/V60_Hario.png'
import filtro_v_60 from '../../assets/filtro_v_60.png'
import logo_shopee from '../../assets/logo_shopee.png'
import { Footer } from '../Footer/index'
export function Acessories(){
    return(
        <Container>
            <Header/>
            <Footer/>
            
            <div className="product">
                <img src={prensa_francesa} alt="prensa francesa" />
                <h1>Prensa Francesa</h1>
                <h3>Basta se adicionar agua quente ao pó de café, Dispensa filtro.</h3>
                <img className="logoLink" src={logo_shopee} alt="Logo da shoppee" />
                <a href="https://shope.ee/foplbo49Z" target='_blank'> COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={cafeteira_italiana} alt="cafeteira italiana" />
                <h1>Cafeteira Italiana - Moka</h1>
                <h3>Método simples de preparo. Vai ao fogo.</h3>
                <img className="logoLink" src={logo_shopee} alt="Logo da shoppee" />
                <a href="https://shope.ee/2fZuADjYih" target='_blank'>COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={V60_Hario} alt="V60 Hario" />
                <h1>Conjunto kit V60 - Hario</h1>
                <h3>Aquele café coado num filtro especial.</h3>
                <img className="logoLink" src={logo_shopee} alt="Logo da shoppee" />
                <a href="https://shope.ee/6f62wXWQLo" target='_blank'>COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={filtro_v_60} alt="filtro v60" />
                <h1>Filtro V60 - Hario</h1>
                <h3>Somente o filtro v60.</h3>
                <img className="logoLink" src={logo_shopee} alt="Logo da shoppee" />
                <a href="https://shope.ee/6f62wXWQLo" target='_blank'>COMPRE AGORA</a>
            </div>

        </Container>
    )
}