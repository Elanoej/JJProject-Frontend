import { useServiceOrderData } from "../../Hooks/useServiceOrderData";
import ServiceOrder from "../../components/ServiceOrder/ServiceOrder";
import Menu from "../Menu/Menu";

function Oficina() {

    const { data } = useServiceOrderData(); 

    return (
        <div className="container-oficina">
            <h1>Oficina</h1>
            <Menu/>
            <table className="oficina-table">
                <thead className="oficina-main-thead">
                    <tr className="table-preset">
                        <th>Id</th>
                        <th>Data</th>
                        <th>Cliente</th>
                        <th>Modelo</th>
                    </tr>
                    {data?.map(serviceOrder =>
                        <ServiceOrder
                            id={serviceOrder.id}
                            data={serviceOrder.date}
                            cliente={serviceOrder.client}
                            detalhesDoProduto={serviceOrder.productDetails}
                            inforCliente={serviceOrder.clientInfos}
                            inforTec={serviceOrder.tecInfos}
                            modeloDoProduto={serviceOrder.productModel}
                        />
                    )}
                </thead>
            </table>
        </div>
    )
}

export default Oficina