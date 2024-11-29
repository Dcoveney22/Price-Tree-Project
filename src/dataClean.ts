import { SKU } from "./skuClass";
import { SKUduty } from "./skuClassDuty";

export class CleanUpData {
  cleanData: SKU[] = [];

  async dataClean(dataDB: SKU[]) {
    for (let x = 0; x < dataDB.length; x++) {
      const priceNumber = Number(dataDB[x].ExWorks_Price.slice(2));

      dataDB[x].ExWorks_Price = Number(priceNumber);

      const abvNumber = Number(dataDB[x].ABV.replace("%", ""));

      dataDB[x].ABV = Number(abvNumber);

      const sizeNumber = Number(dataDB[x].Size_CL.replace("cl", ""));
      dataDB[x].Size_CL = Number(sizeNumber / 100);

      this.cleanData.push(dataDB);
      // console.log(this.cleanData);
    }
  }
}

// const app = new CleanUpData();
// app.dataClean();
