import { Alinhamento, Barra, BarraTitulo, BotaoEntrar, Flor, Fundo, ImgFundo, LinkMudar, SubTexto } from "./style";
import Loginfundo from "./../../Img/Loginfundo.png";
import Flores from "./../../Img/flores.png"
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setPassword] = useState("");
  const { signed } = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      senha
    };
    const response = await axios.post('http://localhost:3008/api/auth/login', data)
    //console.log(response.data);

    localStorage.setItem("@Auth:user", JSON.stringify(response.data.data[0].nome));
    localStorage.setItem("@Auth:token", response.data.data[0].token);
    
    return navigate("/home")

  };
  console.log(signed);
  if (!signed) {

  return (
    <>
      <Fundo>
        <ImgFundo src={Loginfundo} alt="Arte digital jovem em uma paisagem"/>
        <Flor src={Flores} alt="Flores de colocação azul e roxa feitas de tinta"/>

        
        <Alinhamento onSubmit={handleSubmit}>
          <BarraTitulo>Digite seu Email:</BarraTitulo>
          <Barra type="email"
          className={email !== "" ? "has-val input" : "input"}
          placeholder="exemplo@gmail.com"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}           
          />

          <BarraTitulo>Digite sua senha:</BarraTitulo>
          <Barra type="password"
          className={senha !== "" ? "has-val input" : "input"}
          placeholder="sua senha"
          value={senha} 
          onChange={(e) => setPassword(e.target.value)}
          />
          <BotaoEntrar type="submit">Entrar</BotaoEntrar>
          <SubTexto>Não tem uma conta?<LinkMudar to="/registro"> Clique aqui!</LinkMudar></SubTexto>
        </Alinhamento>
      </Fundo>
    </>
  );
  } else {
    return <navigate to="/home" />;
  }
}

export default Login
