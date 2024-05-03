import { ServiceOrderData } from "./ServiceOrderData";

interface Address {
    logradouro: string,
    complemento: string,
    bairro: string,
}

export interface ClientData extends RepresetationModel{
    id?: number,
    name: string,
    address: Address,
    cellphone: string,
    serviceOrders?: ServiceOrderData[];
}