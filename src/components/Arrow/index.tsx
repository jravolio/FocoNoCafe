import { Container } from "./styles";
import { Link } from "react-router-dom";


export function Arrow() {

  return (
    <Container>
      <Link to="/">
        <img src="src/assets/keyboard_arrow_left.svg" alt="Seta para voltar para tela inicial" />
      </Link>
    </Container>
  );
}
