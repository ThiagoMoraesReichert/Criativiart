import { BannerProfile, BarraProfile, BarrasLateraisDropdown, BotoesProfile, BotoesProfileGrid, GridSeguindoSeguidores, ProfilePic, SidebarContainer, TextSublinhado } from "./style"
import User from "./../../Img/usuario.png"
import { LinkStyled, SeguidosSeguindo } from "../../components/MenuBar/style"
import MenuBar from "../../components/MenuBar/Menu"


function Profile(){
    const nome = localStorage.getItem('@Auth:user').replace(/["]/g, '');

    return(
        <>
            <BannerProfile>
                
                <BarrasLateraisDropdown>
                <SidebarContainer>
                    <MenuBar/>
                </SidebarContainer>
                </BarrasLateraisDropdown>

                <ProfilePic src={User}/>
                <TextSublinhado>{nome}</TextSublinhado>
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