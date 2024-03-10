import { ChangeEvent, useState } from "react";
import { MdEdit, MdDelete, MdClose, MdCheck } from "react-icons/md";
import { useProductDataDelete, useProductDataUpdate } from "../../Hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./Product.css"

function Product(productData: ProductData) {

    const [ data, setData ] = useState<ProductData>({
        id: productData.id,
        name: productData.name,
        price: productData.price,
        quantity: productData.quantity,
        type: productData.type
    });
    const [ isEditing, setIsEditing ] = useState(false);

    const productDelete = useProductDataDelete();
    const productUpdate = useProductDataUpdate();

    const handleOnChange = (event : ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.accessKey]: event.target.value
        })
    }

    const resetInput = () => {
        const product: ProductData = {
            id: productData.id,
            name: productData.name,
            price: productData.price,
            type: productData.type,
            quantity: productData.quantity
        }
        setData(product);
    }

    const handleDelete = () => {
        if(confirm('Você tem certeza que deseja remover "' + productData.name + '"?')){
            productDelete.mutate(data);
        }
    }

    const handleEdit = () => {
        resetInput();
        setIsEditing(!isEditing);
    }

    const submit = ()=>{
        productUpdate.mutate(data);
        setIsEditing(!isEditing);
    }

    return (
        <tr className="product">
            <td><input type="number" value={data.id} disabled={true}/></td>
            <td><input accessKey="name" type="text" value={data.name} disabled={!isEditing} onChange={event => handleOnChange(event)}/></td>
            <td><input accessKey="price" type={isEditing ? 'number':'text'} value={isEditing ? data.price: `R$${data.price},00`} disabled={!isEditing} onChange={event => handleOnChange(event)}/></td>
            <td><input accessKey="type" type="text" value={data.type} disabled={!isEditing} onChange={event => handleOnChange(event)}/></td>
            <td><input accessKey="quantity" type="number" value={data.quantity} disabled={!isEditing} onChange={event => handleOnChange(event)}/></td>
            <td className="td-options">
                <button className="btn-options" type="button" onClick={() => handleEdit()}>{isEditing ? <MdClose/> : <MdEdit/>}</button>
                <button hidden={!isEditing} onClick={submit}><MdCheck/></button>
                <button className="btn-options" type="button" onClick={()=> handleDelete()}><MdDelete/></button>
            </td>
        </tr>
    )
}

export default Product