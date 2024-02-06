import { ClientData } from "../../interface/ClientData";
import "./Overlay.css"

interface OverlayProps {
    isOpen: boolean,
    setOverlayOpen: () => void,
    clientData: ClientData
}

export function Overlay({isOpen, setOverlayOpen, clientData}: OverlayProps){

    const handleOverlayOpen = () => {
        setOverlayOpen();
    }

    if(isOpen){
        return(
            <div className="overlay">
                <div className="body">
                    <button onClick={handleOverlayOpen} className="btn-close">X</button>
                    <h2>Aparelhos cadastrados no nome de {clientData.name.split(" ")[0]}:</h2>
                    {clientData.serviceOrders.map(so =>
                        <p>Id:{so.id}</p>
                    )}
                    <button>+</button>
                </div>
            </div>
        )
    }
   
}
