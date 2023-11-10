import { BarraPesquisa, BotaoPostar, BotaoPostarImg, FundoHome, HeaderHome } from "./style";
import Lapis from "./../../Img/lapis.png"
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import MenuBar from "../../components/MenuBar/Menu";


function Home(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    return(
        <>
            <FundoHome>
                
                <HeaderHome>
                    <BarraPesquisa placeholder="Pesquise algo aqui..."/>
                    <BotaoPostar onClick={toggleModal}><BotaoPostarImg src={Lapis}/></BotaoPostar>
                    <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
                </HeaderHome>
                <MenuBar/>

            </FundoHome>
        </>
    );
}

export default Home