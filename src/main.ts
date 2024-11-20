import { InventoryPackDB } from "./pullDataDB";

class App {
  async main() {
    let inventoryPackDB = new InventoryPackDB();

    await inventoryPackDB.loadInventoryDB();
    console.log(inventoryPackDB.inventoryDataArray);
  }
}

const app = new App();
app.main();
