import { ClientData } from "./ClientData";

export interface ServiceOrderData extends RepresetationModel {
    id: number,
    date: Date,
    client: ClientData,
    productModel: string,
    productDetails: string,
    clientInfos: string,
    tecInfos: string
}