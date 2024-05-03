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
            <table className="table table-client">
                <thead className="table-preset">
                    <tr>
                        <th style={{width: "5%"}}>Id</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Celular</th>
                        <th style={{width: "10%"}}>Opções</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {/* Client Test MOCK */}
                    <Client 
                        id={77}
                        name="Client Name"
                        address={ {logradouro:"Client Address", complemento:"Client Address", bairro:"Client Address"} }
                        cellphone="Client Cellphone"
                        serviceOrders={[]}
                    />  
                    {data?.map(clientData => 
                    <Client 
                        id={clientData.id}
                        name={clientData.name}
                        address={clientData.address}
                        cellphone={clientData.cellphone}
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