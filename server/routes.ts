import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, addProducts } from "./controllers/products.ts";

const router = new Router();
//TODO
router.get("/api/products", getProducts)
    .post("/api/products", addProducts) //edit to take user
    //get by user(s)
    //update item by user
    //get by any field -- look into this

export default router;