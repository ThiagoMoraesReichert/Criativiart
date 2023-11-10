import styled from "styled-components";

export const Titulo = styled.h1`
    position: absolute;
    font-size: 8vh;
    margin-left: 50vw;
    padding-top: 2%;
    color: white;
`

export const AdjustDiv = styled.div`
    padding-left: 54vw;
    position: absolute;
    margin-top: 10vh;
    z-index: 1;
`

export const Menu = styled.div`
    position: absolute;
    z-index: 2;
`

export const SubTitulo = styled.p`
    font-size: 4vh;
    color: white;
`


export const BarraAlterarNome = styled.input`
    width: 18vw;
    height: 5vh;
    background-color: #44509F;
    color: white;
    border-radius: 15px;
    outline: 0;
    border: none;
    padding-left: 10px;
    font-size: 3vh;
`

export const AdjustAlterName = styled.div`
    display: grid;
    padding-top: 8vh;
    text-align: center;
    grid-gap: 5px;
`

export const BotaoExcluir = styled.button`
    margin-top: 21vh;
    width: 15vw;
    border: none;
    outline: 0;
    height: 5vh;
    border-radius: 5px;
    background-color: #F05C5C;
    color: #FF0000;
    font-size: 4vh;
    cursor: pointer;
`

export const BotaoSalvar = styled.button`
    margin-top: 5px;
    padding: 0px 7px;
    border: none;
    outline: 0;
    height: 5vh;
    border-radius: 5px;
    background-color: #50c168;
    color: white;
    font-size: 4vh;
    cursor: pointer;
`
