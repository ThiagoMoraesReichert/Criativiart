import { BotaoSair, Botoes, BotoesDisplay, Centralizar, ColunaConfig, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, UsuarioIcon } from "./style";
import Usuario from "./../../Img/usuario.png"
import axios from "axios";
import { useState, useEffect } from "react";

function MenuBar(){

    const [nameInfo, setNameInfo] = useState("");
    const data = {
        NameUsuario: localStorage.getItem('@Auth:user')
    } 

    console.log(data)

    useEffect(() => {

        const axiosData = async () => {
            try {
                
                const response = await axios.get('http://localhost:3008/api/users', data);
                if(response.data.success) {
                    setNameInfo(response.data.data.NameUsuario);
                } else {
                    console.error('Erro ao obter dados do usuário');
                }
            } catch (error) {
                console.error('Erro ao obter dados do usuário', error);
            }
        };

        axiosData();
    })

    useEffect(() => {
        if(nameInfo) {
            setNameInfo(nameInfo);
        }
    }, [nameInfo]);

    return(
        <>
                <ColunaConfig>
                    <Centralizar>
                        <UsuarioIcon src={Usuario}/>
                        <Nome>{nameInfo}</Nome>
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