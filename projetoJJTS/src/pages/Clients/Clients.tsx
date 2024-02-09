import { useState } from "react";
import { useClientData } from "../../Hooks/useClientData";
import Client from "../../components/Client/Client";
import { Overlay } from "../../components/Overlay/Overlay";
import "./Clients.css"

function Clients() {

    const { data } = useClientData(); 
    const [ isOverlayOpen, setIsOverlayOpen] = useState(false);

    return(
        <div className="clients-container">
            <h1>Clientes</h1>
            <table className="client-table">
                <thead className="table-head">
                    <tr>
                        <td style={{width: "5%"}}>Id</td>
                        <td>Nome</td>
                        <td>Endereço</td>
                        <td>Celular</td>
                        <td style={{width: "10%"}}>Opções</td>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {data?.map(clientData => 
                    <Client 
                        address={clientData.address}
                        id={clientData.id}
                        cellphone={clientData.cellphone}
                        name={clientData.name}
                        serviceOrders={clientData.serviceOrders}
                    />  
                    )}
                </tbody>
            </table>
            <Overlay isOpen={isOverlayOpen} setOverlayOpen={() => setIsOverlayOpen(!isOverlayOpen)}/>
            <button onClick={() => setIsOverlayOpen(true)} className="btn-overlay">+</button>
        </div>
    )

}

export default Clients