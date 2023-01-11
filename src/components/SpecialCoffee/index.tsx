import { Container } from "./styles";
import Pico_do_bone_250 from "../../assets/coffees/Pico_do_bone_250.png";
import Pico_do_bone_500 from "../../assets/coffees/Pico_do_bone_500.png";
import Pico_do_bone_250_premiado from "../../assets/coffees/Pico_do_bone_250_premiado.png";
import drip_coffee from "../../assets/coffees/drip_coffee.png";
import drip_coffee_family from "../../assets/coffees/drip_coffee_family.png";
import { Arrow } from "../Arrow";

export function SpecialCoffee() {
  return (
    <Container>
      <Arrow />
      <div className="product">
        <img src={Pico_do_bone_250} alt="Café Pico do boné" />
        <h1>Café especial Pico do boné - (moído ou grãos) - 250 g</h1>
        <h3>
          Café 100% arábico - Catuaí Vermelho - Torra média (artesanal) - SEM
          GLÚTEN Produzido por mulheres da agricultura familiar do interior de
          Minas Gerais em altitude superior a 850m garantindo um sabor e aroma
          único.
        </h3>
        <a
          href="https://shope.ee/8er6uGas5I"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          COMPRE AGORA
        </a>
      </div>

      <div className="product">
        <img src={Pico_do_bone_500} alt="Café Pico do boné 500g" />
        <h1>Café especial Pico do boné - (moído ou em grãos) - 500 g</h1>
        <h3>
          Café 100% arábico - Blend de catuai vermelho e catuai amarelo - Torra
          artesanal - SEM GLUTÉN 87,6 pontos safra 2021/2022 Notas sensoriais:
          Café equilibrado com notas marcantes de frutado, frutas vermelhas e
          amarelas, especiarias, doçura elevada, acidez cítrica e encorpado.
        </h3>

        <a
          href="https://shope.ee/1fhMjYxsxs"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPRE AGORA
        </a>
      </div>

      <div className="product">
        <img src={Pico_do_bone_250_premiado} alt="Pico do boné 250g premiado" />
        <h1>
          Café especial Pico do boné - (moído ou em grãos) - 87 pontos 250 g -
          EDIÇÃO PREMIADA
        </h1>
        <h3>
          Café 100% arábico - Blend de catuai vermelho e catuai amarelo - Torra
          artesanal - SEM GLUTÉN 87,6 pontos safra 2021/2022 Notas sensoriais:
          Café equilibrado com notas marcantes de frutado, frutas vermelhas e
          amarelas, especiarias, doçura elevada, acidez cítrica e encorpado.
        </h3>

        <a
          href="https://shope.ee/5pWvjgmHfE"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPRE AGORA
        </a>
      </div>

      <div className="product">
        <img src={drip_coffee} alt="drip coffee" />
        <h1>Coffee mais drip - CLÁSSICO - 10 saches</h1>
        <h3>
          Café Especial 100% arábico. CLÁSSICO - Notas sensoriais de CHOCOLATE,
          CARAMELO e FRUTAS SECAS. Praticidade de café que pode ser coado em
          qualquer lugar.
        </h3>

        <a
          href="https://shope.ee/3KpalqGGck"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPRE AGORA
        </a>
      </div>

      <div className="product">
        <img src={drip_coffee_family} alt="drip coffee" />
        <h1>Coffee mais drip - Kit Família com 4 Caixas</h1>
        <h3>
          Café Especial 100% arábico. Praticidade de café que pode ser coado em
          qualquer lugar.
        </h3>

        <a
          href="https://shope.ee/3KpalqGGck"
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPRE AGORA
        </a>
      </div>
    </Container>
  );
}
