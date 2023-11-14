import styled from "styled-components";

export const PostContainer = styled.div`
    background-color: #1B1F3B;
    position: relative;
    color: white;
    margin-top: 8%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    border-radius: 5px;
    max-width: 55%;
    display: flex;
    align-items: center;

    p {
        font-size: 20px;
    }

    h2 {
        text-decoration: underline;
    }
`

export const ProfilePic = styled.img`
    max-width: 15%;
    max-height: 15%;
    padding-top: 10px;
    margin-right: 10px;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ContainerColumn = styled.div`
    margin-left: 32%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2px;
`

export const InputComment = styled.input`
    max-width: 55%;
    background-color: #44509F;
    height: 20px;
    outline: 0;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    padding: 13px;
`