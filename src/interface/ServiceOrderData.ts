import { ClientData } from "./ClientData";

export interface ServiceOrderData {
    id: number,
    date: Date,
    client: ClientData,
    productModel: string,
    productDetails: string,
    clientInfos: string,
    tecInfos: string
}