import { BannerProfile, BarraProfile, BarrasLateraisDropdown, BotoesProfile, BotoesProfileGrid, GridSeguindoSeguidores, ProfilePic, SidebarContainer, TextSublinhado } from "./style"
import User from "./../../Img/usuario.png"
import { BotaoSair, BotaoSino, Botoes, BotoesDisplay, Centralizar, ColunaConfig, LinkStyled, Nome, SS, SSespaco, SeguidosSeguindo, SinoStyled, UsuarioIcon } from "../Home/style"
import Sino from "./../../Img/sino.png"
import Usuario from "./../../Img/usuario.png"


function Profile(){
    return(
        <>
            <BannerProfile>

                <BarrasLateraisDropdown>
                <SidebarContainer>
                <ColunaConfig>
                    <Centralizar>
                        <BotaoSino>
                            <SinoStyled src={Sino}/>
                        </BotaoSino>
                        <UsuarioIcon src={Usuario}/>
                        <Nome>Usuário</Nome>
                        <SS>
                            <SSespaco>
                                <SeguidosSeguindo>0 Seguidores</SeguidosSeguindo>
                                <SeguidosSeguindo>0 Seguindo</SeguidosSeguindo>
                            </SSespaco>
                        </SS>
                        <BotoesDisplay>
                            <LinkStyled to="profile"><Botoes>Perfil</Botoes></LinkStyled>
                            <LinkStyled to="home"><Botoes>Início</Botoes></LinkStyled>
                            <LinkStyled to="configuracao"><Botoes>Configurações</Botoes></LinkStyled>
                            <LinkStyled to="inicio"><BotaoSair>Sair</BotaoSair></LinkStyled>
                        </BotoesDisplay>
                    </Centralizar>
                </ColunaConfig>
                </SidebarContainer>
                </BarrasLateraisDropdown>

                <ProfilePic src={User}/>
                <TextSublinhado> Nome do usuário</TextSublinhado>
                <GridSeguindoSeguidores>
                    <SeguidosSeguindo> Seguidores: 0</SeguidosSeguindo>
                    <SeguidosSeguindo> Seguindo: 0</SeguidosSeguindo>
                </GridSeguindoSeguidores>
            </BannerProfile>
            
            <BarraProfile>
                <BotoesProfileGrid>
                    <LinkStyled to="profile"><BotoesProfile>Artes</BotoesProfile></LinkStyled>
                    <LinkStyled to="profile"><BotoesProfile>Sobre</BotoesProfile></LinkStyled>
                </BotoesProfileGrid>
            </BarraProfile>
        </>
    )
}

export default Profile