import styled from "styled-components";

export const FundoHome = styled.body`
    background-color: #373D68;
    height: 100vh;
`

export const BarraPesquisa = styled.input`
    position: absolute;
    height: 6vh;
    width: 55vw;
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
    margin-left: 93.5%;
    cursor: pointer;

    
`

export const BotaoPesquisar = styled.button`
    font-size: 20px;
    margin-top: 5px;
    height: 6vh;
    margin-left: 82%;
    padding: 0px 7px;
    background-color: #3c8647;
    outline: 0;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    position: absolute;
`

export const DivUsuariosPesquisa = styled.div`
    width: 55vw;
    display: flex;
    position: absolute;
    margin-top: 6.5vh;
    margin-left: 26%;
    flex-direction: column;
    border-radius: 5px;
    background-color: #222648;
    z-index: 2;
`

export const PostCard = styled.div`
    background-color: #1B1F3B;
    position: relative;
    color: white;
    margin-top: 8%;
    padding: 8px 20px;
    border-radius: 5px;
    width: 55%;
    display: flex;
    flex-direction: row; /* Mantém os itens em linha */
    align-items: center;
    z-index: 1;

    p {
        font-size: 20px;       
    }

    div {
        flex-direction: column; /* Coloca o h2 abaixo do p */
    }

    h2 {
        font-size: 25px;
        margin-bottom: 5px;
        font-weight: 500;
        text-decoration: underline;
    }

    img {
        display: block;
        width: 6vw;
        margin-right: 20px;
    }
`

export const ContainerColumn = styled.div`
    margin-left: 32%;
    display: grid;
    padding-bottom: 5vh;
`



export const BotaoPostarImg = styled.img`
    justify-content: center;
    align-items: center;
    padding: 1px;
    height: 5vh;
    width: 3vw;
`
export const BotaoPerfilUsuarios = styled.button`
    border: none;
    outline: 0;
    cursor: pointer;
    background: none;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    z-index: 2;

    &:hover {
    background-color: #2b2f52;
    }
`

export const InputComment = styled.input`
    width: 45%;
    background-color: #44509F;
    height: 20px;
    outline: 0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 13px;
`
    
export const BotaoComment = styled.button`
    padding: 2px 5px;
    background-color: #62cf62;
    color: white;
    font-size: 20px;
    position: absolute;
    height: 25px;
    border-radius: 5px;
    cursor: pointer;
    width: 7%;
    border: none;
    outline: 0;
`
export const CommentDiv = styled.div`
    margin-left: 36%;
`