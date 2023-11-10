import { useState } from "react";
import "./Modal.css";
import { BotaoEnviarModal, InputModal } from "./style";
import axios from "axios";

export default function Modal({ isOpen, toggleModal }) {
    const [descricao, setDescricao] = useState("");

    if (isOpen) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    const handlePost = async () => {
        const data = {
            descricao,
            idUsuario: localStorage.getItem('@Auth:id')
        } 

        console.log(data);

        const response = await axios.post('http://localhost:3008/api/post/create', data);

        if(response.data.success) {
            alert('criado com sucesso');
        } else {
            alert('nao deu');
        }
    }

    return (
        <>

            {isOpen && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Escreva um post</h2>
                        <InputModal value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        <BotaoEnviarModal onClick={handlePost}>Enviar</BotaoEnviarModal>
                        <button className="close-modal" onClick={toggleModal}>
                            ⛒
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}