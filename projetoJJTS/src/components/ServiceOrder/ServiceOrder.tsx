import { Client } from "../../interface/ClientData";


interface ServiceOrderProps {
    id: number,
    data: Date,
    cliente: Client,
    modeloDoProduto: string,
    detalhesDoProduto: string,
    inforCliente: string,
    inforTec: string
}

function ServiceOrder({id, data, cliente, modeloDoProduto}: ServiceOrderProps){
    return (
        <tr className="serviceOrder">
            <th>{id}</th>
            <th>{data.toString()}</th>
            <th>{cliente.name}</th>
            <th>{modeloDoProduto}</th>
        </tr>
    )
}

export default ServiceOrder