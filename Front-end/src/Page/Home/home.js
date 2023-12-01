import { BarraPesquisa, BotaoComment, BotaoPerfilUsuarios, BotaoPesquisar, BotaoPostar, BotaoPostarImg, ContainerColumn, DivUsuariosPesquisa, FundoHome, HeaderHome, InputComment, PostCard } from "./style";
import Lapis from "./../../Img/lapis.png"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import MenuBar from "../../components/MenuBar/Menu";
import { api } from"../../services/api"
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserIcon from "../../Img/usuario.png"


function Home(){
    const [usersList, setUsersList] = useState([]);
    const [usersSearch, setUserSearch] = useState([]);
    const [userName, setUserName] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const navigate = useNavigate();

    const [postsList, setPostsList] = useState([]);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const fetchData = async () => {
        const response = await api.get('/users');     
        console.log(response.data.data);   
        setUsersList(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handlerSearch = async () => {
        const nome = userName;
        const response = await api.get('/searchUsers/' + nome);
        console.log(response.data.data);
        setUserSearch(response.data.data);
    };

    let { id } = useParams();

    id = localStorage.getItem('@Auth:token')

    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem('@Auth:token')) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);

    const fetchDataPost = async () => {
        const response = await api.get('/posts');        
        setPostsList(response.data.data);
    }

    useEffect(() => {
        fetchDataPost();
    }, [fetchDataPost]);


    return(
        <>
            <FundoHome>                
                <HeaderHome>
                    <BarraPesquisa 
                        placeholder="Pesquise usuários aqui..." 
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <BotaoPesquisar onClick={handlerSearch}>Pesquisar</BotaoPesquisar>

                    <DivUsuariosPesquisa>
                        {usersSearch.map((user) => {
                            return (
                                <>
                                <BotaoPerfilUsuarios onClick={()=> navigate(`/profile/${id}`)}>
                                    <h4>{user.nome}</h4>
                                </BotaoPerfilUsuarios>
                                </>
                            )
                        })}
                    </DivUsuariosPesquisa>

                    <BotaoPostar onClick={toggleModal}><BotaoPostarImg src={Lapis}/></BotaoPostar>
                    <Modal isOpen={isModalOpen} toggleModal={toggleModal} />   
                </HeaderHome>

                <MenuBar/>

                <>
                <ContainerColumn>
                    {postsList.map((posts) => (
                        <div key={posts.id}>
                            <PostCard>
                                <img src={UserIcon} alt="Icone de usuário"/>
                                <div>
                                    <h2>{posts.nome}</h2>
                                    <p>{posts.descricao}</p>
                                </div>
                            </PostCard>

                            <InputComment
                                placeholder="Escreva um comentário"
                                type='text'
                            />
                            <BotaoComment>Enviar</BotaoComment>
                        </div>
                    ))}            
                </ContainerColumn>
                
                </>
            </FundoHome>
        </>
    );
}

export default Home