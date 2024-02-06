import { useState } from "react"
import { ClientData } from "../../interface/ClientData"
import { Overlay } from "../Overlay/Overlay"

function Client(clientData: ClientData) {

    const [ isOverlayOpen, setIsOverlayOpen ] = useState(false)

    return(
        <tr className="product">
            <th>{clientData.id}</th>
            <th>{clientData.name}</th>
            <th>{clientData.address}</th>
            <th>{clientData.cellphone}</th>
            <th>
                <Overlay isOpen={isOverlayOpen} setOverlayOpen={() => setIsOverlayOpen(!isOverlayOpen)} clientData={clientData}/>
                <button className="bt-img" onClick={() => setIsOverlayOpen(true)}><img src="https://cdn-icons-png.flaticon.com/512/65/65000.png" alt="Detalhes" /></button>
            </th>
        </tr>
    )
}

export default Client