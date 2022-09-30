import { Container } from "./styles"
import Logo from '../../assets/Logo.png'
export function Header(){
    return(
        <Container>
            <img src={Logo} alt="Foto logomarca" />
            <h1>FOCO NO CAFÉ</h1>
            <h3>Uma coletânea de produtos especiais separados pra você!</h3>
        </Container>
    )
}