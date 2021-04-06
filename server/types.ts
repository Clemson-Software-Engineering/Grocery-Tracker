//TODO edits
//Add user, unit, store, url
//Try to keep to one table
export interface Product {
    _id?: { $oid: string };
    name: string;
    brand: string;
    quantity: number;
    max_quantity: number;
}