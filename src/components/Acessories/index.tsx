import { Container } from "./styles"
import xicara from '../../assets/acessories/xicara.png'
import prensa_francesa from "../../assets/acessories/prensa_francesa.png";
import cafeteira_italiana from '../../assets/acessories/cafeteira_italiana.png'
import V60_Hario from '../../assets/acessories/V60_Hario.png'
import filtro_v_60 from '../../assets/acessories/filtro_v_60.png'
import { Arrow } from "../Arrow";

export function Acessories(){
    return(
        <Container>
            <Arrow/>
            <div className="product">
                <img src={xicara} alt="Xícara" />
                <h1>Casquinha Cup com Chocolate - Xícara</h1>
                <h3>Um Cup feito de casquinha de sorvete, coberto com delicioso chocolate Marvi, desenvolvido para tornar o seu café de todo dia, de forma mais saborosa e sustentável.
                Zero descarte tome o café e coma o copinho crocante de sobremesa
                Sabor: baunilha com cobertura de chocolate</h3>
                <a href="https://shope.ee/4AOhvUfg0X" target='_blank' rel="noopener noreferrer"> COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={prensa_francesa} alt="prensa francesa" />
                <h1>Prensa Francesa</h1>
                <h3>Basta se adicionar agua quente ao pó de café, Dispensa filtro.</h3>
                
                <a href="https://shope.ee/foplbo49Z" target='_blank' rel="noopener noreferrer"> COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={cafeteira_italiana} alt="cafeteira italiana" />
                <h1>Cafeteira Italiana - Moka</h1>
                <h3>Método simples de preparo. Vai ao fogo.</h3>
                
                <a href="https://shope.ee/2fZuADjYih" target='_blank' rel="noopener noreferrer">COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={V60_Hario} alt="V60 Hario" />
                <h1>Conjunto kit V60 - Hario</h1>
                <h3>Aquele café coado num filtro especial.</h3>
                
                <a href="https://shope.ee/6f62wXWQLo" target='_blank' rel="noopener noreferrer">COMPRE AGORA</a>
            </div>

            <div className="product">
                <img src={filtro_v_60} alt="filtro v60" />
                <h1>Filtro V60 - Hario</h1>
                <h3>Somente o filtro v60.</h3>
                
                <a href="https://shope.ee/6f62wXWQLo" target='_blank' rel="noopener noreferrer">COMPRE AGORA</a>
            </div>

        </Container>
    )
}