import { Client } from "pg";
import { SKU } from "./skuClass";

export class InventoryPackDB {
  inventoryDataArray: SKU[] = [];

  client = new Client({
    host: "127.0.0.1",
    port: 5432,
    database: "pricetreedb",
    user: "postgres",
    password: "p@ssword1",
  });

  async loadInventoryDB() {
    await this.client.connect();
    await this.getInventoryDB();
    await this.client.end();
  }

  async getInventoryDB() {
    const res = await this.client.query("SELECT * FROM priceTreeInventory");
    res.rows.forEach((inventoryData) => {
      this.inventoryDataArray.push(
        new SKU(
          inventoryData.brand,
          inventoryData.sku_name,
          inventoryData.category,
          inventoryData.segment,
          inventoryData.import_country,
          inventoryData.abv,
          inventoryData.size_cL,
          inventoryData.exworks_price
        )
      );
    });
  }
}
