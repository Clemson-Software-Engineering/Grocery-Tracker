import { MongoClient, Bson } from "https://deno.land/x/mongo@v0.21.0/mod.ts";
import { Product } from "../types.ts";

const client = new MongoClient();
//TODO routes


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

const addProducts = async ({ request, response }: {request: any, response : any }) => {
    const body = request.body()
    const product = await body.value

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: "no data from request"
        }
    } else {
        try {
            await client.connect("mongodb://user:pass@127.0.0.1:27017");
            
            const db = client.database("test");
            const products = db.collection<Product>("products");

            const insertID = await products.insertOne({ 
                name: product.name,
                brand: product.brand,
                quantity: product.quantity,
                max_quantity: product.max_quantity,
             });

            response.body = {
                success: true,
                insertID : insertID
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
}

export { getProducts, addProducts }