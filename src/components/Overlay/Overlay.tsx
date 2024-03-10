import { ChangeEvent, useState } from "react";
import { ClientData } from "../../interface/ClientData";
import { useClientMutate } from "../../Hooks/useClientMutate";
import { MdAdd, MdClose } from "react-icons/md";

import "./Overlay.css"

interface OverlayProps {
    isOpen: boolean,
    setOverlayOpen: () => void,
}

export function Overlay({isOpen, setOverlayOpen}: OverlayProps){

    const [clientData, setClientData] = useState<ClientData>({
        name: "",
        address: "",
        cellphone: ""
    });

    const { mutate } = useClientMutate();

    const handleOverlayOpen = () => {
        setOverlayOpen();
        resetInput();
    }

    const resetInput = () => {
        const data:ClientData = {
            name: "",
            address: "",
            cellphone: ""
        }
        setClientData(data);
    }

    const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
        const data: ClientData = {
            ...clientData,
            [event.target.accessKey]: event.target.value
        }
        setClientData(data);
    }

    const submit = () => {
        mutate(clientData, {onSuccess: resetInput});
    }

    const checkKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
        if(ev.key == `Escape`){
            handleOverlayOpen();
        }
    }

    if(isOpen){
        return(
            <div className="overlay" onKeyDown={checkKeyDown} >
                <div className="overlay-body">
                   <button onClick={handleOverlayOpen} className="btn-close"><MdClose/></button>
                    <form className="overlay-form">
                        <label>Nome:</label>
                        <input type="text" accessKey="name" value={clientData.name} onChange={event => updateValue(event)}/>
                        <label>Endereço:</label>
                        <input type="text" accessKey="address" value={clientData.address} onChange={event => updateValue(event)}/>
                        <label>Telefone:</label>
                        <input type="text" accessKey="cellphone" value={clientData.cellphone} onChange={event => updateValue(event)}/>
                    </form>
                    <button onClick={submit}><MdAdd/></button>
                </div>
            </div>
        )
    }
   
}
