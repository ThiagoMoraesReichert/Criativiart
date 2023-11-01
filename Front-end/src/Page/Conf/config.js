import { BotaoSair, Botoes, BotoesDisplay, Centralizar, ColunaConfig, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, UsuarioIcon } from "../Home/style";
import Usuario from "./../../Img/usuario.png"
import { AdjustAlterName, AdjustDiv, BarraAlterarNome, BotaoExcluir, BotaoSalvar, SubTitulo, Titulo } from "./style";

function Config(){
    return(
        <>
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

        <Titulo>Configurações:</Titulo>
        <AdjustDiv>
            <Centralizar>
                <UsuarioIcon src={Usuario}/>
                <SubTitulo>Alterar avatar</SubTitulo>
                <AdjustAlterName>
                    <SubTitulo>Alterar nome:</SubTitulo>
                    <BarraAlterarNome />
                </AdjustAlterName>
                <BotaoSalvar>Salvar</BotaoSalvar>
                <BotaoExcluir>Excluir Conta</BotaoExcluir>
            </Centralizar>
        </AdjustDiv>
        </>
    );
}

export default Config