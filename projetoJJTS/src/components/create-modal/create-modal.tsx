import { useState } from "react"
import { useProductDataMutate } from "../../Hooks/useProductDataMutate";
import { ProductData } from "../../interface/ProductData";

import "./CreateModal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface CreateModalProps {
    isOpen: boolean,
    setModalOpen: () => void;
}

const Input = ({label, value, updateValue}: InputProps) =>{
    return(
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({isOpen, setModalOpen}: CreateModalProps){

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState(0);
    const { mutate , isSuccess } = useProductDataMutate();


    const handleModalOpen = () => {
        setModalOpen();
        resetInput();
    }

    const resetInput = () => {
        setName("");
        setPrice(0);
        setType("");
        setQuantity(0);
    }

    const submit = () => {
        const productData: ProductData = {
            id:0,
            name,
            price,
            type,
            quantity
        }
        mutate(productData)
        if(isSuccess){
            resetInput()
        }
    }

    if(isOpen){
        return(
            <div className="modal-overlay">
                <div className="modal-body">
                    <button onClick={handleModalOpen} className="btn-close">X</button>
                    <h2>Cadastre um novo produto</h2>
                    <form className="input-container">
                      <Input label="Nome" value={name} updateValue={setName}/>
                      <Input label="Preço" value={price} updateValue={setPrice}/>
                      <Input label="Tipo" value={type} updateValue={setType}/>
                      <Input label="Quantidade" value={quantity} updateValue={setQuantity}/>
                    </form>
                    <button onClick={submit} className="btn-secondary">+</button>
                </div>
            </div>
        )
    }
   
}
