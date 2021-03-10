import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.21.0/mod.ts";
import { Product } from "../types.ts";

const client = new MongoClient();



const getProducts = async ({ response }: { response: any }) => {
    try{
        await client.connect("mongodb://user:pass@127.0.0.1:27017");
        const db = client.database("test");
        const products = db.collection<Product>("products");

        const all_prods = await products.find({ name: { $ne: null } })
                        .toArray();
        
        response.body = {
            success: true,
            data: all_prods
        }
    } catch (err) {
        response.status = 500
        response.body = {
            success: false,
            msg: err.toString()
        }
    } finally {
        await client.close()
    }
}

export { getProducts }