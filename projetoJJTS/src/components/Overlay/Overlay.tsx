import { useState } from "react";
import "./Overlay.css"
import { ClientData } from "../../interface/ClientData";
import { useClientMutate } from "../../Hooks/useClientMutate";

interface OverlayProps {
    isOpen: boolean,
    setOverlayOpen: () => void,
}

export function Overlay({isOpen, setOverlayOpen}: OverlayProps){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [cellphone, setCellphone] = useState("");
    const { mutate, isSuccess } = useClientMutate();
    
    const handleOverlayOpen = () => {
        setOverlayOpen();
    }

    const resetInput = () => {
        setName("");
        setAddress("");
        setCellphone("");
    }

    const submit = () => {
        const clientData: ClientData = {
            name,
            address,
            cellphone,
        }
        mutate(clientData)
        if(isSuccess){
            resetInput();
        }
    }

    if(isOpen){
        return(
            <div className="overlay">
                <div className="body">
                   <button onClick={handleOverlayOpen} className="btn-close">X</button>
                    <form className="overlay-form">
                        <label>Nome:</label>
                        <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                        <label>Endereço:</label>
                        <input type="text" value={address} onChange={event => setAddress(event.target.value)}/>
                        <label>Telefone:</label>
                        <input type="text" value={cellphone} onChange={event => setCellphone(event.target.value)}/>
                    </form>
                   <button onClick={submit}>+</button>
                </div>
            </div>
        )
    }
   
}
