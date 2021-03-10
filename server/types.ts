export interface Product {
    _id: { $oid: string };
    name: string;
    quantity: number;
    max_quantity: number;
}