import { CleanSKU } from "./skuClass";

import { DutySKU } from "./dutySKU";

export class DutyCalculator {
  newInventory: DutySKU[] = [];

  //Upgrade with new constructors - push to new Array

  async dutyCalc(cleanData: CleanSKU[]) {
    // console.log(cleanData);

    // console.log(cleanData);
    for (let x = 0; x < cleanData.length; x++) {
      // console.log(cleanData[x].ABV);
      if (cleanData[x].ABV <= 22) {
        const calcLow = (29.54 / 100) * cleanData[x].ABV * cleanData[x].Size_CL;
        cleanData[x].Duty = calcLow;
        const calcSaleLow = (cleanData[x].Sale_Price =
          cleanData[x].ExWorks_Price + cleanData[x].Duty);

        this.newInventory.push(
          new DutySKU(
            cleanData[x].Brand,
            cleanData[x].SKU_Name,
            cleanData[x].Category,
            cleanData[x].Segment,
            cleanData[x].Import_Country,
            cleanData[x].ABV,
            cleanData[x].Size_CL,
            cleanData[x].ExWorks_Price,
            calcLow,
            calcSaleLow
          )
        );
      }
      if (cleanData[x].ABV > 22) {
        // console.log(2);
        const calcHigh =
          (32.79 / 100) * cleanData[x].ABV * cleanData[x].Size_CL;
        cleanData[x].Duty = calcHigh;
        const calcSale = (cleanData[x].Sale_Price =
          cleanData[x].ExWorks_Price + cleanData[x].Duty);

        this.newInventory.push(
          new DutySKU(
            cleanData[x].Brand,
            cleanData[x].SKU_Name,
            cleanData[x].Category,
            cleanData[x].Segment,
            cleanData[x].Import_Country,
            cleanData[x].ABV,
            cleanData[x].Size_CL,
            cleanData[x].ExWorks_Price,
            calcHigh,
            calcSale
          )
        );
      } // console.log(cleanData);
    }
    console.log(this.newInventory.length);
  }
}

// const app = new DutyCalculator();
// app.dutyCalc();
