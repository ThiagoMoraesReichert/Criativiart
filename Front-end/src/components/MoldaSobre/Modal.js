import { useState } from "react";
import "./Modal.css";
import { BotaoEnviarModal, InputModal } from "./style";
import axios from "axios";

export default function Modal({ isOpen, toggleModal }) {
    const [sobre, setSobre] = useState("");
    const [contato, setContato] = useState("");

    if (isOpen) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }


    const handleSobre = async () => {

        try {
            const userId = localStorage.getItem('@Auth:id');      
            const response = await axios.put(`http://localhost:3008/api/user/update/${userId}`, {
              sobre,
              contato,
            });

            alert('Dados atualizados com sucesso:', response.data);
          } catch (error) {
            alert('Erro ao atualizar dados:', error.message);
          }
        };


    return (
        <>

            {isOpen && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Escreva sobre você:</h2>
                        <InputModal type="text" value={sobre} onChange={(e) => setSobre(e.target.value)} />
                        
                        <h2>Seu contato:</h2>
                        <InputModal type="text" value={contato} onChange={(e) => setContato(e.target.value)} />
                        <BotaoEnviarModal onClick={handleSobre}>Enviar</BotaoEnviarModal>
                        <button className="close-modal" onClick={toggleModal}>
                            ⛒
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}