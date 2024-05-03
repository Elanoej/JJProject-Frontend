import { MdClose, MdDelete, MdEdit , MdCheck } from "react-icons/md"
import { ClientData } from "../../interface/ClientData"
import { ChangeEvent, useState } from "react";
import { useClientMutateDelete, useClientMutateUpdate } from "../../Hooks/useClientMutate";

import "./Client.css"

function Client(clientData: ClientData) {

    const [ data, setData ] = useState<ClientData>({
        id: clientData.id,
        address: clientData.address,
        cellphone: clientData.cellphone,
        name: clientData.name,
        serviceOrders: clientData.serviceOrders
    });

    const [ isEditing, setIsEditing] = useState(false);

    const clientUpdate = useClientMutateUpdate();
    const clientDelete = useClientMutateDelete();

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.accessKey == "address"){
            setData({
                ...data,
                address: {
                    ...data.address,
                    logradouro: event.target.value
                }
            })
            return
        }
        setData({
            ...data,
            [event.target.accessKey]: event.target.value
        })
    }

    const resetInput = () => {
        const client : ClientData = {
            id: clientData.id,
            name: clientData.name,
            address: clientData.address,
            cellphone: clientData.cellphone,
            serviceOrders: clientData.serviceOrders
        }
        setData(client);
    }

    const handleEdit = () => {
        setIsEditing(!isEditing);
        resetInput();
    }

    const submit = () => {
        clientUpdate.mutate(data);
        setIsEditing(!isEditing);
    }

    const deleteData = () => {
        if(confirm('Você tem certeza que deseja remover "' + clientData.name + '"?')){
            clientDelete.mutate(data);
        } 
    }

    return(
        <tr className={`client ${data.id}`}>
            <td className="id"><input disabled={true} type="number" value={data.id}/></td>
            <td><input accessKey="name" disabled={!isEditing} type="text" value={data?.name} onChange={event => handleOnChange(event)}/></td>
            <td><input accessKey="address" disabled={!isEditing} type="text" value={data?.address.logradouro} onChange={event => handleOnChange(event)}/></td>
            <td><input accessKey="cellphone" disabled={!isEditing} type="text" value={data?.cellphone} onChange={event => handleOnChange(event)}/></td>
            <td className="td-options">
                <button className="btn-options" type="button" onClick={handleEdit}>{isEditing ? <MdClose/> : <MdEdit/>}</button>
                <button onClick={submit} hidden={!isEditing}><MdCheck/></button>
                <button className="btn-options" type="button" onClick={deleteData}><MdDelete/></button>
            </td>
        </tr>
    )
}

export default Client