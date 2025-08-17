import { Hono } from "hono";
import * as productController from "@/product/product.controller.ts";

const product = new Hono();

product.get("/:id", productController.get);

export default product;
