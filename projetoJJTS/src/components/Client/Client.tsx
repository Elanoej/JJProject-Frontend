import { MdDelete, MdEdit } from "react-icons/md"
import { ClientData } from "../../interface/ClientData"


function Client(clientData: ClientData) {
    
    return(
        <tr className="product">
            <td>{clientData.id}</td>
            <td>{clientData.name}</td>
            <td>{clientData.address}</td>
            <td>{clientData.cellphone}</td>
            <td>
                <button className="btn-options" type="button"><MdEdit /></button>
                <button className="btn-options" type="button"><MdDelete /></button>
            </td>
        </tr>
    )
}

export default Client