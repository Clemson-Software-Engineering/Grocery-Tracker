import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, addProducts, lowProducts, searchProductsByUser } from "./controllers/products.ts";

const router = new Router();
//TODO
router.get("/api/products", getProducts)
    .post("/api/products", addProducts) 
    .get("/api/low", lowProducts)
    .get("/api/users/:id", searchProductsByUser)
    //update item by user
    //delete item
    //get by any field -- look into this

export default router;