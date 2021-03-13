export interface Product {
    _id?: { $oid: string };
    name: string;
    brand: string;
    quantity: number;
    max_quantity: number;
}