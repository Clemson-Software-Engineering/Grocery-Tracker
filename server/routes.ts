import { Router } from "https://deno.land/x/oak/mod.ts";
import { getProducts, addProducts } from "./controllers/products.ts";

const router = new Router();

router.get("/api/products", getProducts)
    .post("/api/products", addProducts)

export default router;