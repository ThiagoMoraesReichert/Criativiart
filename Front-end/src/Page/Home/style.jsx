import styled from "styled-components";
import { Link } from "react-router-dom";

export const FundoHome = styled.body`
    background-color: #373D68;
    height: 100vh;
`

export const ColunaConfig = styled.div`
    background-color: #1B1F3B;
    height: 100vh;
    width: 25vw;
    display: relative;
    position: fixed;
`

export const Centralizar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const UsuarioIcon = styled.img`
    height: 20vh;
    width: 10vw;
    margin-top: 25%;
`

export const BotoesDisplay = styled.div`
    display: grid;
    margin-top: 4vh;
    
`

export const Botoes = styled.button`
    color: white;
    cursor: pointer;
    margin-top: 2vh;
    width: 25vw;
    height: 8vh;
    background-color: transparent;
    border: 0;
    font-size: 25px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #2b2f52;
    }
`
export const BotaoSair = styled.button`
    color: #FF0000;
    cursor: pointer;
    margin-top: 13vh;
    position: absolute;
    width: 25vw;
    height: 8vh;
    background-color: transparent;
    border: 0;
    font-size: 25px;
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #852727;
    }
`
export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;
`

export const LinkStyledSair = styled(Link)`
    text-decoration: none;
    color: #FF0000;
    position: absolute;
`

export const SinoStyled = styled.img`
    height: 6vh;
    width: 3vw;

`

export const BotaoSino = styled.button`
    background-color: transparent;
    margin-right: 17vw;
    border: 0;
    outline: 0;
    margin-bottom: 66vh;
    position: absolute;
    cursor: pointer;
`


export const BarraPesquisa = styled.input`
    position: absolute;
    height: 6vh;
    width: 65vw;
    margin-left: 26%;
    margin-top: 5px;
    color: white;
    background: #1B1F3B;
    font-size: 20px;
    padding-left: 2vw;
    border: none;
    outline: 0;
    border-radius: 25px;
`

export const HeaderHome = styled.header`
    display: flex;
`

export const BotaoPostar = styled.button`
    background-color: #293DC9;
    height: 6vh;
    margin-top: 5px;
    width: 4vw;
    border-radius: 50%;
    border: 0;
    float: left;
    position: absolute;
    margin-left: 94.5%;
    cursor: pointer;

    
`

export const BotaoPostarImg = styled.img`
    height: 5vh;
    width: 3vw;
`

export const Nome = styled.h2`
    font-size: 30px;
    color: white;
    font-weight: normal;
`

export const SeguidosSeguindo = styled.p`
    font-size: 15px;
    color: white;
`

export const SS = styled.div`
    display: flex;
    padding-top: 10vh;
    position: absolute;
`

export const SSespaco = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`
