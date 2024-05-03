export interface ProductData extends RepresetationModel{
    id: number,
    name: string,
    price: number | undefined,
    type: string,
    quantity: number | undefined
}