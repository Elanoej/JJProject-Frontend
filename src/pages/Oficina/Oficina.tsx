import { useState } from "react";
import { useServiceOrderData } from "../../Hooks/useServiceOrderData";
import ServiceOrder from "../../components/ServiceOrder/ServiceOrder";
import "./Oficina.css";
import { useNavigate } from "react-router-dom";

function Oficina() {

    const [ isOpen, setIsOpen] = useState(false);
    const { data } = useServiceOrderData();
    const navigate = useNavigate();

    const navegateToOSCreate = () => {
        if(confirm("Você será redirecionado para outra página. \nDeseja continuar?")){
            navigate('/service-order-create');
        }
    }

    return (
        <div className="container-oficina">
            <h1>Oficina</h1>
            <div className="oficina-types">
                <a href="/clientes">Clientes</a>
                <a href="/aparelhos">Aparelhos</a>
            </div>
            <table className="oficina-table">
                <thead className="oficina-main-thead">
                    <tr className="table-preset">
                        <th style={{width: "5%"}}>Id</th>
                        <th>Data</th>
                        <th>Cliente</th>
                        <th>Modelo</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(serviceOrder => <ServiceOrder serviceOrder={serviceOrder}/>)}
                </tbody>
            </table>
            {/* <ServiceOrderModal isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)}/> */}
            <button className="btn-modal" onClick={navegateToOSCreate}>+</button>
        </div>
    )
}

export default Oficina