import styled from "styled-components";
import { Link } from "react-router-dom";

export const Fundo = styled.body`
  background-color: #c874d9;
  height: 100vh;
`

export const ImgFundo = styled.img`
  width: 50vw;
  height: 100vh;
  position: absolute;
`

export const Barra = styled.input`
  width: 25vw;
  height: 8vh;
  border: none;
  font-size: 25px;
  outline: 0;
  margin-top: 15vh;
`

export const BarraTitulo = styled.h2`
  color: White;
  margin-top: 20vh;
  text-decoration: none;
  font-weight: normal;
  
`

export const BotaoEntrar = styled.button`
  width: 25.3vw;
  height: 8vh;
  color: white;
  font-size: 25px;
  background-color: #44A5DB;
  border: 0;
  cursor: pointer;
  margin-top: 18vh;
  position: relative;

`

export const SubTexto = styled.p`
  font-size: 20px;
  color: white;
  margin-top: 17vh;
`

export const LinkMudar = styled(Link)`
  text-decoration: none;
  color: #0FF1FF;
  font-size: 20px;
`

export const Alinhamento = styled.form`
  padding-left: 62.5%;
  display: grid;
  grid-auto-rows: 0px 2px 2px;
  grid-gap: 9.5vh;
  
`



export const Flor = styled.img`
  position: absolute;
  margin-left: 77.58%;
  height: 25vh;
  margin-top: 36.5%;
`