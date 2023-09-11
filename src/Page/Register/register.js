import { Alinhamento, Flor, Fundo, ImgFundo, LinkMudar } from "./../Login/style";
import Loginfundo from "./../../Img/Loginfundo.png";
import Flores from "./../../Img/flores.png";
import { BarraTituloR, BarraR, BotaoEntrarR, SubTextoR } from "./style"

function Register(){
    return(
        <>
            <Fundo>
            <ImgFundo src={Loginfundo} alt="Arte digital jovem em uma paisagem"/>
            <Flor src={Flores} alt="Flores de colocação azul e roxa feitas de tinta"/>

            
            <Alinhamento>
                <BarraTituloR>Digite seu nome de usuário:</BarraTituloR>
                <BarraR type="text"
                placeholder="SeuNome"
                />

                <BarraTituloR>Digite seu Email:</BarraTituloR>
                <BarraR type="email"
                placeholder="exemplo@gmail.com"
                
                />

                <BarraTituloR>Digite sua senha:</BarraTituloR>
                <BarraR type="password"
                placeholder="sua senha"
                
                />
                <BotaoEntrarR type="submit">Criar conta</BotaoEntrarR>
                <SubTextoR>Já tem uma conta? <LinkMudar to="/login"> Clique aqui!</LinkMudar></SubTextoR>
            </Alinhamento>

        </Fundo>
      </>
    );
}

export default Register;