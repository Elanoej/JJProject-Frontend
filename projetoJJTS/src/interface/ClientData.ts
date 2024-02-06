import { ServiceOrderData } from "./ServiceOrderData";

export interface ClientData {
    id: number,
    name: string,
    address: string,
    cellphone: string,
    serviceOrders: ServiceOrderData[];
}