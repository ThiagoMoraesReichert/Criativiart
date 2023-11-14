import { BotaoSair, Botoes, BotoesDisplay, Centralizar, ColunaConfig, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, UsuarioIcon } from "./style";
import Usuario from "./../../Img/usuario.png"

function MenuBar(){

    const nome = localStorage.getItem('@Auth:user').replace(/["]/g, '');

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
                            <LinkStyled to="/profile"><Botoes>Perfil</Botoes></LinkStyled>
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