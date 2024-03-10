import { ServiceOrderData } from "../../interface/ServiceOrderData"

interface ServiceOrderProps {
    serviceOrder: ServiceOrderData;
}

function ServiceOrder({ serviceOrder }: ServiceOrderProps){

    return (
        <tr className="serviceOrder">
            <td>{serviceOrder.id}</td>
            <td>{serviceOrder.date.toString().split("T")[1]}</td>
            <td>{serviceOrder.client.name}</td>
            <td>{serviceOrder.productModel}</td>
        </tr>
    )
}

export default ServiceOrder