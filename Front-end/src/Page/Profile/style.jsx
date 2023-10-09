import styled from "styled-components"
import Banner from "./../../Img/banner.png"
import BarrasLaterais from "./../../Img/barrasLaterais.svg"
import { ColunaConfig } from "../Home/style"

export const BannerProfile = styled.div`
    height: 40vh;
    background-image: url(${Banner});
    align-items: center;
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
export const ProfilePic = styled.img`
    max-height: 19vh;
`

export const TextSublinhado = styled.h3`
    color: white;
`

export const TextDesc = styled.p`
    color: white;
`

export const GridSeguindoSeguidores = styled.div`
    padding-top: 1.5vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`

export const BarraProfile = styled.div`
    display: flex;
    height: 7vh;
    display: flex;
    background-color: #1B1F3B;
    text-align: center;
    justify-content: center;
`
export const BotoesProfile = styled.button`
    color: white;
    cursor: pointer;
    width: 10vw;
    height: 7vh;
    background-color: transparent;
    border: 0;
    font-size: 17px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #2b2f52;
    }
`

export const BotoesProfileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
`
export const SidebarContainer = styled.div`
    width: 0;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #333;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 20px;
`;

export const BarrasLateraisDropdown = styled.button`
    background-image: url(${BarrasLaterais});
    border: none;
    cursor: pointer;
    padding: 10px;
    position: absolute;


  &:hover + ${SidebarContainer} {
    width: 200px;
  }
`