import logo from "./../../Img/Logo.png";
import cerebro from "../../Img/Cerebro.png";
import botao from "./../../Img/Botão.png";
import { FundoInicio, Header, Logo, Cerebro, Botao, TituloI, ParagrafoI, ImgBotao } from "./style";
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <>
      <FundoInicio>
        <Header>
          <Logo src={logo} alt="Logo Criativiart" />
          <h4> Criativiart </h4>
        </Header>
        <Cerebro src={cerebro} alt="Cérebro criativo com diversas cores" />
        <TituloI> Criativiart </TituloI>
        <ParagrafoI> Compartilhe suas ideias e dificuldades com<br/>
        outros artistas!</ParagrafoI>
        <Botao>
          <Link to="/login">
            <ImgBotao src={botao}/>
          </Link>
        </Botao>
      </FundoInicio>
    </>
  );
}

export default Inicio;
