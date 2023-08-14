import "./Product.css"

interface ProductProps{
    id?: number,
    nome: string,
    preco: number,
    tipo: string,
    quantidade: number
}

function Product({id, nome, preco, tipo, quantidade}: ProductProps) {
    return (
        <tr className="product">
            <th>{id}</th>
            <th>{nome}</th>
            <th>R${preco.toFixed(2).toString().replace(".", ",")}</th>
            <th>{tipo}</th>
            <th>{quantidade}</th>
        </tr>
    )
}

export default Product