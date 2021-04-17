import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, addProducts } from "./controllers/products.ts";

const router = new Router();
//TODO
router.get("/api/products", getProducts)
    .post("/api/products", addProducts) 
    //get by user(s)
    //update item by user
    //delete item
    //get by any field -- look into this

export default router;