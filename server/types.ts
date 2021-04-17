export interface Product {
    _id?: { $oid: string };
    user: string;
    name: string;
    store: string;
    brand: string;
    threshold: string;
    quantity: number;
    max_quantity: number;
    unit: string;
}