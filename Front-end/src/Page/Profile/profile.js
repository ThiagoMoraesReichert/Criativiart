import { BannerProfile, BarraProfile, BarrasLateraisDropdown, BotoesProfile, BotoesProfileGrid, GridSeguindoSeguidores, LabelPerfil, ProfilePic, SidebarContainer, TextSublinhado, BotaoSobre, Alinhamento, BotaoSeguir, BotaoFecharModal, BotaoEnviarInput, InputFileStyle, ContainerArtes } from "./style"
import User from "./../../Img/usuario.png"
import { LinkStyled, SeguidosSeguindo } from "../../components/MenuBar/style"
import MenuBar from "../../components/MenuBar/Menu"
import { useState } from "react";
import Modal from "../../components/MoldaSobre/Modal";
import { useEffect } from "react";
import { api } from"../../services/api"
import SeguirIcon from "../../Img/seguir_icon.png";
import ModalB from 'react-bootstrap/Modal';

function Profile(){
    const nome = localStorage.getItem('@Auth:user').replace(/["]/g, '');
    const [abaAtiva, setAbaAtiva] = useState('artes');
    const [image, setImage] = useState();
    const [artes, setArtes] = useState([]);
    const [teste] = useState([])
    const imagens = 'http://localhost:3008/uploads/';
    const [informacoes, setInformacoes] = useState([]);
    const handleClick = (aba) => {
      setAbaAtiva(aba);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchDataInformacoes = async () => {
        try {
            const userId = localStorage.getItem('@Auth:id');
            const response = await api.get(`/user/informacoesUsuario/${userId}`);
            setInformacoes(response.data.data);  // Ajuste aqui para pegar o primeiro item da resposta
            console.log(response)
        } catch (error) {
            console.error('Erro ao buscar informações:', error.message);
          }
        };

    useEffect(() => {
        fetchDataInformacoes();
    }, []);

    const handleFile = async () => {
        let formData = new FormData();

        formData.append('id_usuario', localStorage.getItem('@Auth:id'));
        formData.append('file', image);

        const response = await api.post('/perfil/create', formData);

        if (response.data.success) {
            handleClose();
            alert('Sucesso');
        } else {
            alert('Sem sucesso');
        }
    }

    const fetchArtes = async () => {
        const id = localStorage.getItem('@Auth:id');
        const response = await api.get('/perfil/artes/' + id);
        console.log(response.data);
        if(response.data.success) {
            setArtes(response.data.data);
            console.log(artes);
        }
    }

    useEffect(() => {
        fetchArtes();
    }, [])
    console.log(informacoes);
    return(
        <>
            <BannerProfile>
                
                <BarrasLateraisDropdown>
                <SidebarContainer>
                    <MenuBar/>
                </SidebarContainer>
                </BarrasLateraisDropdown>

                <ProfilePic src={User}/>
                <TextSublinhado>{nome}</TextSublinhado>

                {/* <BotaoSeguir>
                    <img src={SeguirIcon} />  
                    Seguir
                </BotaoSeguir> */}
                <GridSeguindoSeguidores>
                    <SeguidosSeguindo> Seguidores: 0</SeguidosSeguindo>
                    <SeguidosSeguindo> Seguindo: 0</SeguidosSeguindo>
                </GridSeguindoSeguidores>
            </BannerProfile>
            
            <BarraProfile>
                <BotoesProfileGrid>
                    <LinkStyled><BotoesProfile onClick={() => handleClick('artes')}>Artes</BotoesProfile></LinkStyled>
                    <LinkStyled><BotoesProfile onClick={() => handleClick('sobreAba')}>Sobre</BotoesProfile></LinkStyled>
                    
                    <BotoesProfile onClick={handleShow}>
                        Enviar Arte
                    </BotoesProfile>


                    <ModalB show={show} onHide={handleClose}>    
                        <BotaoFecharModal onClick={handleClose}>
                            ⛒
                        </BotaoFecharModal>                    
                        <ModalB.Body>                
                            <LabelPerfil for="labelProfile">Escolha a ilustração aqui!</LabelPerfil>
                            <InputFileStyle                                        
                                id="labelProfile" 
                                type="file" 
                                accept="image/*"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </ModalB.Body>
                        <ModalB.Footer>
                        <BotaoEnviarInput onClick={handleFile}>
                            Salvar
                        </BotaoEnviarInput>
                        </ModalB.Footer>
                    </ModalB>

                </BotoesProfileGrid>
            </BarraProfile>

            {abaAtiva === 'artes' && (
                <ContainerArtes>
                    {artes.map((arte)=>(
                        <img 
                            key={artes.id} 
                            src={imagens + arte.imagem} 
                            height={'360px'}
                        />
                        
                    ))}
                </ContainerArtes>
            )}

            {abaAtiva === 'sobreAba' && (
                <Alinhamento>
                    <BotaoSobre onClick={toggleModal}>Adicionar informações</BotaoSobre>
                    <Modal isOpen={isModalOpen} toggleModal={toggleModal} />

                
                    <div key={informacao.id}>
                        {/* <h2>Biografia:</h2>
                        <p>{informacao.sobre}</p>
                        <h3>Contato:</h3>
                        <p>{informacao.contato}</p> */}
                    </div>

                </Alinhamento>
            )}
        </>
    )
}

export default Profile