import { Hono } from "hono";
import { graphqlServer } from "@hono/graphql-server";
import { buildSchema } from "graphql";

import { SearchSchema } from "@/types/Search.ts";
import { CommonSchema } from "@/types/Common.ts";
import { ProductSchema } from "@/types/Product.ts";
import * as searchController from "@/search/search.controller.ts";
import * as productController from "@/product/product.controller.ts";

import playgroundHandler from "@/common/playground/index.ts";

const graphql = new Hono();

const schema = buildSchema(/* GraphQL */ `
  type Query {
    search(query: String!, page: Int, country: String!): SearchResult
    product(id: String!, country: String!): Product
  }

  ${CommonSchema}

  ${SearchSchema}

  ${ProductSchema}
`);

graphql.use(
  "/",
  graphqlServer({
    schema: schema,
    rootResolver: () => {
      return {
        search: searchController.searchGqlResolver,
        product: productController.productGqlResolver,
      };
    },
  })
);
graphql.get("/playground", playgroundHandler);

export default graphql;
