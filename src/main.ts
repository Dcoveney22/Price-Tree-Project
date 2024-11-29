import { CleanUpData } from "./dataClean";
import { DutyCalculator } from "./dutyCalculator";
import { InventoryPackDB } from "./pullDataDB";

class App {
  async main() {
    let inventoryPackDB = new InventoryPackDB();

    await inventoryPackDB.loadInventoryDB();
    // console.log(inventoryPackDB.inventoryDataArray);

    // data clean
    let cleanUpData = new CleanUpData();

    await cleanUpData.dataClean(inventoryPackDB.inventoryDataArray);
    // console.log(cleanUpData.cleanData);

    //add Duty

    let dutyCalculator = new DutyCalculator();

    await dutyCalculator.dutyCalc(cleanUpData.cleanData);
  }
}

const app = new App();
app.main();
