import { ChangeEvent, useState } from "react"
import { useProductDataMutate } from "../../Hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./CreateModal.css"

interface InputProps {
    label: string,
    value: string | number | undefined,
    updateValue(value: any): void,
    accessKey: string
}

interface CreateModalProps {
    isOpen: boolean,
    setModalOpen: () => void;
}

const Input = ({label, value, updateValue, accessKey}: InputProps) => {
    return(
        <>
            <label>{label}</label>
            <input accessKey={accessKey} value={value} onChange={event => updateValue(event)} type={(accessKey == 'name' || accessKey == 'type') ? 'text': 'number'}></input>
        </>
    )
}

export function CreateModal({isOpen, setModalOpen}: CreateModalProps){

    const [ data, setData ] = useState<ProductData>({
        id: 0,
        name: "",
        price: undefined,
        type: "",
        quantity: undefined
    });

    const productData = useProductDataMutate();

    const resetInput = () => {
        const product : ProductData = {
            id: 0,
            name: "",
            price: undefined,
            type: "",
            quantity: undefined
        }
        setData(product);
    }

    const handleModalOpen = () => {
        resetInput();
        setModalOpen();
    }

    const updateValue = (event:ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [event.target.accessKey]:event.target.value
        })
    }

    const submit = () => {
        productData.mutate(data, {onSuccess: resetInput});
    }

    if(isOpen){
        return(
            <div className="modal-overlay">
                <div className="modal-body">
                    <button onClick={handleModalOpen} className="btn-close">X</button>
                    <h2>Cadastre um novo produto</h2>
                    <form className="input-container">
                      <Input accessKey="name" label="Nome" value={data.name} updateValue={(event) => updateValue(event)}/>
                      <Input accessKey="price" label="Preço" value={data.price} updateValue={(event) => updateValue(event)}/>
                      <Input accessKey="type" label="Tipo" value={data.type} updateValue={(event) => updateValue(event)}/>
                      <Input accessKey="quantity" label="Quantidade" value={data.quantity} updateValue={(event) => updateValue(event)}/>
                    </form>
                    <button onClick={submit} className="btn-secondary">+</button>
                </div>
            </div>
        )
    }
   
}
