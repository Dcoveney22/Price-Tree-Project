import { SKU } from "./skuClass";
import { SKUduty } from "./skuClassDuty";

export class DutyCalculator {
  newInventory: SKU[] = [];
  // inventory: SKU[] = [
  //   {
  //     Brand: "Godet Cognac",
  //     SKU_Name: "VSOP",
  //     category: "Cognac",
  //     segment: "Premium",
  //     import_country: "France",
  //     abv: 21,
  //     size_cl: 0.7,
  //     exWorks_price: 24.0,
  //   },
  //   {
  //     brand: "Hedonistas de la Fe",
  //     sku_name: "Espadin",
  //     category: "Mezcal",
  //     segment: "Premium",
  //     import_country: " Holland",
  //     abv: 46,
  //     size_cl: 0.7,
  //     exWorks_price: 34.0,
  //   },
  // ];

  //Upgrade with new constructors - push to new Array

  async dutyCalc(cleanData: SKU[]) {
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
      this.newInventory.push(cleanData);
      console.log(this.newInventory);
    }
  }
}

// const app = new DutyCalculator();
// app.dutyCalc();
