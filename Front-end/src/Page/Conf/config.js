import MenuBar from "../../components/MenuBar/Menu";
import { Centralizar, UsuarioIcon } from "../../components/MenuBar/style";
import Usuario from "./../../Img/usuario.png"
import { AdjustAlterName, AdjustDiv, BarraAlterarNome, BotaoExcluir, BotaoSalvar, Menu, SubTitulo, Titulo } from "./style";

function Config(){
    return(
        <>
        <Menu>
            <MenuBar/>
        </Menu>

        <Titulo>Configurações:</Titulo>
        <AdjustDiv>
            <Centralizar>
                <UsuarioIcon src={Usuario}/>
                <BotaoSalvar> 
                    Alterar Foto de perfil
                    
                </BotaoSalvar>
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