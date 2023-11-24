import { BotaoSair, Botoes, BotoesDisplay, Centralizar, ColunaConfig, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, UsuarioIcon } from "./style";
import Usuario from "./../../Img/usuario.png"
import { useParams } from "react-router-dom";

function MenuBar(){

    const nome = localStorage.getItem('@Auth:user').replace(/["]/g, '');
    let { userId} = useParams 
    userId = localStorage.getItem('@Auth:id')


    return(
        <>
                <ColunaConfig>
                    <Centralizar>
                        <UsuarioIcon src={Usuario}/>
                        <Nome>{nome}</Nome>
                        <SS>
                            <SSespaco>
                                <SeguidosSeguindo>0 Seguidores</SeguidosSeguindo>
                                <SeguidosSeguindo>0 Seguindo</SeguidosSeguindo>
                            </SSespaco>
                        </SS>
                        <BotoesDisplay>
                            <LinkStyled to={`/profile/${userId}`}><Botoes>Perfil</Botoes></LinkStyled>
                            <LinkStyled to="/home"><Botoes>Início</Botoes></LinkStyled>
                            <LinkStyled to="/configuracao"><Botoes>Configurações</Botoes></LinkStyled>
                            <LinkStyled to="/inicio"><BotaoSair>Sair</BotaoSair></LinkStyled>
                        </BotoesDisplay>
                    </Centralizar>
                </ColunaConfig>
        </>
    );
}

export default MenuBar;