import { useState } from "react";
import { MdEdit, MdDelete, MdClose, MdAddCircle } from "react-icons/md";
import { useProductDataDelete, useProductDataUpdate } from "../../Hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

interface ProductProps{
    id: number,
    nome: string,
    preco: number,
    tipo: string,
    quantidade: number,
}

interface EditProductProps {
    isEditOpen: boolean,
    setIsEditOpen: ()=> void,
    id: number,
    nome: string,
    preco: number,
    tipo: string,
    quantidade: number,
}

function Product({id, nome, preco, tipo, quantidade}: ProductProps) {

    const [ isEditOpen, setIsEditOpen] = useState(false);
    const { mutate } = useProductDataDelete();

    const deleteData = () => {
        if(confirm('Você tem certeza que deseja remover "' + nome + '"?')){
            const productData: ProductData = {
                id,
                name: nome,
                price: preco,
                type: tipo,
                quantity: quantidade
            }
            mutate(productData);
        } 
    }

    return (
        <>
            <tr className={"product " + tipo}>
                <td>{id}</td>
                <td>{nome}</td>
                <td>R${preco.toFixed(2).toString().replace(".", ",")}</td>
                <td>{tipo}</td>
                <td>{quantidade}</td>
                <td>
                    <button className="btn-options" type="button" onClick={()=>setIsEditOpen(true)}><MdEdit /></button>
                    <button className="btn-options" type="button"><MdDelete onClick={deleteData}/></button>
                </td>
            </tr>
            <EditProduct 
                isEditOpen={isEditOpen} 
                setIsEditOpen={() => setIsEditOpen(!setIsEditOpen)} 
                nome={nome} 
                preco={preco}
                quantidade={quantidade}
                tipo={tipo}
                id={id}
            />    
        </>
    )
}

function EditProduct({isEditOpen, setIsEditOpen, nome, preco, quantidade, tipo, id}: EditProductProps){
    
    const [ identifier] = useState(id);
    const [ name, setName ] = useState(nome);
    const [ price, setPrice ] = useState(preco);
    const [ type, setType ] = useState(tipo);
    const [ quantity, setQuantity] = useState(quantidade);

    const { mutate, isSuccess } = useProductDataUpdate();

    const resetInput = () => {
        setName(nome);
        setPrice(preco);
        setType(tipo);
        setQuantity(quantidade);
    }

    const handleEditOpen = () =>{
        resetInput();
        setIsEditOpen();
    }

    const update = () => {
        const productData: ProductData = {
            id: identifier,
            name,
            price,
            type,
            quantity
        }
        mutate(productData);
        if(isSuccess){
            handleEditOpen()
        }
    }

    if(isEditOpen){
        return(
            <tr className="editProduct">
                <td></td>
                <td>Nome:<input type="text" value={name} onChange={event => setName(event.target.value)}/></td>
                <td>Preço:<input type="number" value={price} onChange={event => setPrice((Number)(event.target.value))}/></td>
                <td>Tipo:<input type="text" value={type} onChange={event => setType(event.target.value)}/></td>
                <td>Quantidade:<input type="number" value={quantity} style={{width: "50%"}} onChange={event => setQuantity((Number)(event.target.value))}/></td>
                <td>
                    <button onClick={update}><MdAddCircle/></button>
                    <button onClick={handleEditOpen}><MdClose/></button>
                </td>
            </tr>
        )
    }

}

export default Product