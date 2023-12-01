import MenuBar from "../../components/MenuBar/Menu";
import { Centralizar, UsuarioIcon } from "../../components/MenuBar/style";
import Usuario from "./../../Img/usuario.png"
import { AdjustAlterName, AdjustDiv, BarraAlterarNome, BotaoExcluir, BotaoSalvar, InputImage, InputImageTrue, Menu, SubTitulo, Titulo } from "./style";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


function Config(){
    const navigate=useNavigate()
    const userId = localStorage.getItem("@Auth:id")
    const images = 'http://localhost:3008/uploads/';

    
    const deletarRecurso = async (e) => {
        e.preventDefault();

        try {
          const response = await api.delete(`user/${userId}`);
          localStorage.removeItem("@Auth:id")
          localStorage.removeItem("@Auth:user")
          localStorage.removeItem("@Auth:token")
          alert('deu certo')
          navigate('/inicio')
          console.log('Recurso deletado com sucesso:', response.data);
        } catch (error) {
          console.error('Erro ao deletar recurso:', error);
        }
      };

    return(
        <>
        <Menu>
            <MenuBar/>
        </Menu>

        <Titulo>Configurações:</Titulo>
        <AdjustDiv>
            <Centralizar>


                <UsuarioIcon src={Usuario}/>
                <InputImageTrue for='labelEditarFoto'>Enviar imagem</InputImageTrue>
                <InputImage id='labelEditarFoto' type="file" accept="image/*" />
                <AdjustAlterName>
                    <SubTitulo>Alterar nome:</SubTitulo>
                    <BarraAlterarNome />
                </AdjustAlterName>
                <BotaoSalvar>Salvar</BotaoSalvar>
                <BotaoExcluir onClick={deletarRecurso}>Excluir Conta</BotaoExcluir>
            </Centralizar>
        </AdjustDiv>
        </>
    );
}

export default Config