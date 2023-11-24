import styled from "styled-components"
import Banner from "./../../Img/banner.png"
import BarrasLaterais from "./../../Img/barraslaterais.png"

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
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 5px;
`

export const LabelPerfil = styled.label`
    color: white;
    cursor: pointer;
    padding: 10px 10px;
    font-size: 30px;
    font-family: sans-serif;
    background-color: #4e5798;
    border-radius: 10px;
    transition: 0.3s;    

    &:hover {
        background-color: #3f488a;
    }
`
export const BotaoSobre = styled.button`
    border-radius: 5px;
    border: none;
    height: 5vh;
    margin-top: 2vh;
    padding: 0px 7px;
    cursor: pointer;
    font-size: 23px;
    background-color: #41804a;
    color: white;
    font-weight: bold;
    transition: 0.5s ease;

    &:hover {
    background-color: #60b96c;
    color: #dbd5d5;

    }
`

export const Alinhamento = styled.div`
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    margin-right: 5%;

    h2{
        margin-top: 20px;
        color: white;
    }

    h3{
        color: white;
    }
`
export const BotaoFecharModal = styled.button`
    border: none;
    outline: 0;
    font-size: 25px;
    color: #da3d3d;
    transition: 0.2s;
    background: transparent;
    font-weight: bold;
    margin-bottom: 10px;
    margin-left: 93%;
    cursor: pointer;

    &:hover {
        color: #d21e1e;
    }
`

export const ContainerArtes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    img{
        width: calc(33.33%);
        box-sizing: border-box;
    }
`

export const BotaoEnviarInput = styled.button`
    margin-top: 4vh;
    border: none;
    outline: 0;
    padding: 2px 5px;
    font-size: 25px;
    border-radius: 5px;
    background-color: #49bc49;
    color: white;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
    background-color: #2e9e2e;
    color: #ffffff;

    }
`

export const InputFileStyle = styled.input`
    display: none;
    opacity: 0;
`

export const SidebarContainer = styled.div`
    height: 100%;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    display: none;

`;

export const BarrasLateraisDropdown = styled.button`
    background-image: url(${BarrasLaterais});
    background-color: transparent;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: none;
    width: 3vw;
    height: 4vh;
    margin-right: 93vw;
    margin-bottom: 25vh;
    padding: 10px;
    position: absolute;

    

    &:hover ${SidebarContainer} {
        display: block;
    }
`

export const BotaoSeguir = styled.button`
    background-color: #211EA5;
    padding: 1px 7px 1px;
    border: none;
    border-radius: 10px;
    display: flex;
    color: white;
    align-items: center;
    cursor: pointer;

    img{
        width: 15px;
        height: 18px;
        margin-right: 3px;
        padding-bottom: 2px;
        padding-top: 1px;
    }
`