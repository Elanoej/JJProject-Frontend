import { ServiceOrderData } from "./ServiceOrderData";

export interface Client {
    id: number,
    name: string,
    address: string,
    cellphone: string,
    serviceOrders: ServiceOrderData[];
}