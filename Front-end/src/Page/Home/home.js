import { BarraPesquisa, BotaoPostar, BotaoPostarImg, FundoHome, HeaderHome } from "./style";
import Lapis from "./../../Img/lapis.png"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import MenuBar from "../../components/MenuBar/Menu";
import Postagem from "../../components/Post/Postagem";
import { api } from"../../services/api"
import { useEffect } from "react";


function Home(){
    const [usersList, setUsersList] = useState([]);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const fetchData = async () => {
        const response = await api.get('/users');        
        setUsersList(response.data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);



    return(
        <>
            <FundoHome>
                
                <HeaderHome>
                    {usersList.map((users) => {
                        return<>
                            <BarraPesquisa placeholder="Pesquise algo aqui..."/>
                        </>
                    }
                    <BotaoPostar onClick={toggleModal}><BotaoPostarImg src={Lapis}/></BotaoPostar>
                    <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
                </HeaderHome>
                <MenuBar/>

                {/* <Postagem/> */}

            </FundoHome>
        </>
    );
}

export default Home