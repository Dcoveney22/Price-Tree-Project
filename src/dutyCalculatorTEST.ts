import { SKU } from "./skuClass";
import { SKUduty } from "./skuClassDuty";

export class DutyCalculator {
  newInventory = [];
  cleanData = [
    {
      Brand: "Hedonistas de la Fe",
      SKU_Name: " Espadin",
      Category: " Mezcal",
      Segment: " Premium",
      Import_Country: " Holland",
      ABV: 46,
      Size_CL: 0.7,
      ExWorks_Price: 34,
    },
    {
      Brand: "Hedonistas de la Fe33",
      SKU_Name: " Espadin33",
      Category: " Mezcal33",
      Segment: " Premium33",
      Import_Country: " Holland33",
      ABV: 15,
      Size_CL: 0.7,
      ExWorks_Price: 34,
    },
  ];
  //Upgrade with new constructors - push to new Array

  async dutyCalc() {
    // console.log(cleanData);

    // console.log(this.cleanData);
    for (let x = 0; x < this.cleanData.length; x++) {
      if (this.cleanData[x].ABV <= 22) {
        let calcLow =
          (29.54 / 100) * this.cleanData[x].ABV * this.cleanData[x].Size_CL;
        this.cleanData[x].Duty = calcLow;
        this.cleanData[x].Sale_Price =
          this.cleanData[x].ExWorks_Price + this.cleanData[x].Duty;
      }
      if (this.cleanData[x].ABV > 22) {
        let calcHigh =
          (32.79 / 100) * this.cleanData[x].ABV * this.cleanData[x].Size_CL;
        this.cleanData[x].Duty = calcHigh;
        this.cleanData[x].Sale_Price =
          this.cleanData[x].ExWorks_Price + this.cleanData[x].Duty;
      }
      this.newInventory.push(this.cleanData[x]);
      //   console.log(this.cleanData);
      console.log(this.newInventory);
    }
  }
}

const app = new DutyCalculator();
app.dutyCalc();
