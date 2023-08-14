import { Client } from "./Client";

export interface ServiceOrderData {
    id: number,
    date: Date,
    client: Client,
    productModel: string,
    productDetails: string,
    clientInfos: string,
    tecInfos: string
}