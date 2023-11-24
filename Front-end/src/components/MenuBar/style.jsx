import styled from "styled-components";
import { Link } from "react-router-dom";

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
    min-height: 20vh;
    min-width: 10vw;
    border-radius: 50%;
    max-height: 20vh;
    max-width: 10vw;
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
    position: sticky;
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
    position: relative;
`

export const SSespaco = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
`
