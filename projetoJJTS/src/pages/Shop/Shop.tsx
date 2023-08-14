import Menu from "../Menu/Menu"
import "./Shop.css"
import { useProductData } from "../../Hooks/useProductData"
import Product from "../../components/Product/Product";
import { useState } from "react";
import { CreateModal } from "../../components/create-modal/create-modal";

function Shop() {

    const { data } = useProductData();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <div className="shop-container">
            <h1>Loja</h1>
            <Menu />
            <table className="shop-table">
                <thead className="loja-main-thead">
                    <tr className="table-preset">
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Tipo</th>
                        <th>Quantidade</th>
                    </tr>
                    {data?.map(productData =>
                        <Product
                            id={productData.id}
                            nome={productData.name}
                            preco={productData.price}
                            tipo={productData.type}
                            quantidade={productData.quantity}
                        />
                    )}
                    
                </thead>
            </table>
            <CreateModal isOpen={isModalOpen} setModalOpen={() => setIsModalOpen(!isModalOpen)}/>
            <button onClick={() => setIsModalOpen(true)} className="btn-modal">+</button>
        </div>
    )
}

export default Shop