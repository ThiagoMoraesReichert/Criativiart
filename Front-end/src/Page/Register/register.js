import { Alinhamento, Flor, Fundo, ImgFundo, LinkMudar } from "./../Login/style";
import Loginfundo from "./../../Img/Loginfundo.png";
import Flores from "./../../Img/flores.png";
import { BarraTituloR, BarraR, BotaoEntrarR, SubTextoR } from "./style"
import { useState } from "react";
import axios from "axios";

function Register(){
    const [email, setEmail] = useState("");
    const [senha, setPassword] = useState("");
    const [nome, setName] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        nome,
        email,
        senha,
      };
      console.log(data);
      const response = axios.post("http://localhost:3008/api/user/create", data);
      alert("Usuário criado com sucesso!");
      console.log(response)
    };

    return(
        <>
            <Fundo onSubmit={handleSubmit}>
            <ImgFundo src={Loginfundo} alt="Arte digital jovem em uma paisagem"/>
            <Flor src={Flores} alt="Flores de colocação azul e roxa feitas de tinta"/>

            
            <Alinhamento>
                <BarraTituloR>Digite seu nome de usuário:</BarraTituloR>
                <BarraR type="text"
                className={nome !== "" ? "has-val input" : "input"}
                placeholder="SeuNome"
                value={nome}
                onChange={(e) => setName(e.target.value)}
                />

                <BarraTituloR>Digite seu Email:</BarraTituloR>
                <BarraR type="email"
                className={email !== "" ? "has-val input" : "input"}
                placeholder="exemplo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}             
                />

                <BarraTituloR>Digite sua senha:</BarraTituloR>
                <BarraR type="password"
                className={senha !== "" ? "has-val input" : "input"}
                placeholder="sua senha"
                value={senha}
                onChange={(e) => setPassword(e.target.value)}            
                />
                
                <BotaoEntrarR type="submit">Criar conta</BotaoEntrarR>
                <SubTextoR>Já tem uma conta? <LinkMudar to="/login"> Clique aqui!</LinkMudar></SubTextoR>
            </Alinhamento>

        </Fundo>
      </>
    );
}

export default Register