import { Client } from "pg";
import { SKU } from "./skuClass";

export class inventoryPackDB {
  inventoryDataArray: SKU[] = [];

  client = new Client({
    host: "127.0.0.1",
    port: 5432,
    database: "pricetreedb",
    user: "postgres",
    password: "p@ssword1",
  });
}
