import { MdClose } from 'react-icons/md'
import { useClientData } from '../../Hooks/useClientData';
import { ClientData } from '../../interface/ClientData';

import './ServiceOrderCreate.css';

interface ServiceOrderModalProps {

}

interface MySelectorProps {
    options: ClientData[] | undefined
}

export function ServiceOrderCreate(){

    const { data } = useClientData();

    return(
        <div className="SO-create-div">
            <h1>Ordem de Serviço</h1>
            <form className='form'>
                <label>Cliente:</label>
                <MySelector options={data}></MySelector>
                <label>Modelo:</label>
                <input type="text" placeholder='Modelo do Aparelho'/>
                <label>Informações sobre o aparelho:</label>
                <input type="text" />
                <label>Informações dadas pelo cliente:</label>
                <input type="text" />
                <div className='btn-div'>
                    <button type='submit'>Adicionar</button>
                </div>
            </form>
        </div>
    )
}
    


function MySelector({ options }: MySelectorProps){

    if(options){
        return(
            <select>
                <option>Selecione um cliente</option>
                {options.map(options => <option>{options.name}</option>)}
            </select>
        )
    } 
}