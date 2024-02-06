import { useClientData } from "../../Hooks/useClientData";
import Client from "../../components/Client/Client";
import "./Clients.css"

function Clients() {

    const { data } = useClientData(); 

    return(
        <div className="clients-container">
            <h1>Clientes</h1>
            <table className="client-table">
                <thead className="table-head">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Celular</th>
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
        </div>
    )

}

export default Clients