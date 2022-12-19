import { Container } from "./styles";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

export function Home() {

  return (
    <Container>
      <video
        src="src/assets/video.mp4"
        id="bg-video"
        autoPlay
        muted
        loop
      ></video>
      <header>
        <div className="animation-div">
          <img src={Logo} alt="Foto logomarca" />
          <h1>FOCO NO CAFÉ</h1>
          <h3>Uma coletânea de produtos especiais separados pra você!</h3>
        </div>
      </header>
      <div className="links">
        <a href="https://www.youtube.com/@foconocafe5084" target='_blank' rel="noopener noreferrer" className="link youtube">
          <div>
            <img src="src/assets/youtube.svg" alt="Youtube Logo" />
            <p>YOUTUBE</p>
          </div>
          <p className="user">/foconocafe</p>
        </a>
        <a href="https://www.facebook.com/FoconoCafe" target='_blank' rel="noopener noreferrer" className="link facebook">
          <div>
            <img src="src/assets/facebook.svg" alt="Facebook Logo" />
            <p>FACEBOOK</p>
          </div>
          <p className="user">/foconocafe</p>
        </a>
        <a href="https://www.instagram.com/foconocafe/" target='_blank' rel="noopener noreferrer" className="link instagram">
          <div>
            <img src="src/assets/instagram.svg" alt="Instagram logo" />
            <p>INSTAGRAM</p>
          </div>
          <p className="user">@foconocafe</p>
        </a>
        <Link to="acessorios" className="link">
          <div>
            <img src="src/assets/special_coffee.png" alt="" />
            <p>CAFÉS ESPECIAIS</p>
          </div>
        </Link>
        <Link to="cafe" className="link">
          <div>
            <img src="src/assets/acessories.png" alt="" />
            <p>ACESSÓRIOS PARA CAFÉ</p>
          </div>
        </Link>
      </div>
    </Container>
  );
}
