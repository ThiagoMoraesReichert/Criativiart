import { ColumnDiv, ContainerColumn, InputComment, PostContainer, ProfilePic, TextContainer } from "./style";
import Profile from "../../Img/usuario.png"


function Postagem(){
    return (
      <>
        <ContainerColumn>
          <PostContainer>
            <ProfilePic src={Profile}/>
            <TextContainer>
              <h2>Nome Text</h2>
              <p>teste teste teste teste teste</p>
            </TextContainer>
          </PostContainer>
          <InputComment
            placeholder="Escreva um comentário"
          />
        </ContainerColumn>
      </>
    );
  };
  
  export default Postagem;