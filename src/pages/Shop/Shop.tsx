import { useProductData } from "../../Hooks/useProductData"
import Product from "../../components/Product/Product";
import { useState } from "react";
import { CreateModal } from "../../components/create-modal/create-modal";
import "./Shop.css"

function Shop() {

    const { data } = useProductData();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    return (
        <div className="shop-container">
            <h1>Loja</h1>
            <table className="shop-table">
                <thead className="loja-main-thead">
                    <tr className="table-preset">
                        <th style={{width: "5%"}}>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Tipo</th>
                        <th>Quantidade</th>
                        <th style={{width: "10%"}}>Opções</th>
                    </tr>
                </thead>
                <tbody className="shop-table-body">
                    {data?.map(productData => 
                    <Product 
                        id={productData.id}
                        name={productData.name}
                        price={productData.price}
                        quantity={productData.quantity}
                        type={productData.type}
                    />)}
                </tbody>
                           
            </table>
            <CreateModal isOpen={isModalOpen} setModalOpen={() => setIsModalOpen(!isModalOpen)}/>
            <button onClick={() => setIsModalOpen(true)} className="btn-modal">+</button>
        </div>
    )
}

export default Shop