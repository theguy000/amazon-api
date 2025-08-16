import { Hono } from "hono";
import * as searchController from "@/search/search.controller";

const search = new Hono();

search.get("/", searchController.search);

export default search;
