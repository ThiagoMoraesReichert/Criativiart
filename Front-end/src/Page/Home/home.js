import { BarraPesquisa, BotaoPostar, BotaoPostarImg, BotaoSair, Botoes, BotoesDisplay, Centralizar, ColunaConfig, FundoHome, HeaderHome, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, UsuarioIcon } from "./style";
import Usuario from "./../../Img/usuario.png"
import Lapis from "./../../Img/lapis.png"



function Home(){
    return(
        <>
            <FundoHome>
                
                <HeaderHome>
                    <BarraPesquisa placeholder="Pesquise algo aqui..."/>
                    <BotaoPostar><BotaoPostarImg src={Lapis}/></BotaoPostar>
                </HeaderHome>
                <ColunaConfig>
                    <Centralizar>
                        <UsuarioIcon src={Usuario}/>
                        <Nome>Usuário</Nome>
                        <SS>
                            <SSespaco>
                                <SeguidosSeguindo>0 Seguidores</SeguidosSeguindo>
                                <SeguidosSeguindo>0 Seguindo</SeguidosSeguindo>
                            </SSespaco>
                        </SS>
                        <BotoesDisplay>
                            <LinkStyled to="/profile"><Botoes>Perfil</Botoes></LinkStyled>
                            <LinkStyled to="/home"><Botoes>Início</Botoes></LinkStyled>
                            <LinkStyled to="/configuracao"><Botoes>Configurações</Botoes></LinkStyled>
                            <LinkStyled to="/inicio"><BotaoSair>Sair</BotaoSair></LinkStyled>
                        </BotoesDisplay>
                    </Centralizar>
                </ColunaConfig>

            </FundoHome>
        </>
    );
}

export default Home