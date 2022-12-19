import { Container } from "./styles";
import { Link } from "react-router-dom";
import ArrowImg from '/src/assets/keyboard_arrow_left.svg'

export function Arrow() {

  return (
    <Container>
      <Link to="/">
        <img src={ArrowImg} alt="Seta para voltar para tela inicial" />
      </Link>
    </Container>
  );
}
