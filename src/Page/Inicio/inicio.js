import logo from "../../Img/Cerebro.png";
import cerebro from "../../Img/Cerebro.png";
import botao from "../../../public/Imgbotao.png";
import { FundoInicio, Header, Logo, Cerebro, Botao } from "./style";

function Inicio() {
  return (
    <>
      <Header>
        <Logo src={logo} alt="Logo Criativiart" />
        <h4> Criativiart </h4>
      </Header>

      <FundoInicio>
        <h1> Criativiart </h1>
        <p> Compartilhe suas ideias e dificuldades com outros artistas! </p>
        <h2> Login </h2>
        <Botao>
          <img src={botao} /> Login
        </Botao>
        <Cerebro src={cerebro} alt="Cérebro criativo com diversas cores" />
      </FundoInicio>
    </>
  );
}

export default Inicio;
