import { SKU } from "./skuClass";
import { SKUduty } from "./skuClassDuty";

export class DutyCalculator {
  newInventory: SKU[] = [];

  //Upgrade with new constructors - push to new Array

  async dutyCalc(cleanData) {
    // console.log(cleanData);

    // console.log(cleanData);
    for (let x = 0; x < cleanData.length; x++) {
      if (cleanData[x].ABV <= 22) {
        let calcLow = (29.54 / 100) * cleanData[x].abv * cleanData[x].size_cl;
        cleanData[x].Duty = calcLow;
        cleanData[x].Sale_Price =
          cleanData[x].ExWorks_Price + cleanData[x].duty;
      }
      if (cleanData[x].ABV > 22) {
        let calcHigh = (32.79 / 100) * cleanData[x].abv * cleanData[x].size_cl;
        cleanData[x].Duty = calcHigh;
        cleanData[x].Sale_Price =
          cleanData[x].ExWorks_Price + cleanData[x].duty;
      }
      // console.log(cleanData);
      this.newInventory.push(cleanData);
      console.log(this.newInventory);
    }
  }
}

// const app = new DutyCalculator();
// app.dutyCalc();
