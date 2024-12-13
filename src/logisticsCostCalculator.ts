import { CleanSKU } from "./skuClass";
import { DeliveredSKU } from "./delieveredSKU";
import { DutySKU } from "./dutySKU";

const goodsIn = 0.16;
const warehouseRent = 0.36;
const deliveryCost = 0.85;
const euShipping = 1.0;
const internationalShipping = 3.0;
const bbbCosts = goodsIn + warehouseRent + deliveryCost;

export class LogisticsCostCalculator {
  deliveredPriceInventory: DeliveredSKU[] = [];

  //Upgrade with new constructors - push to new Array

  async logisticsCalc(exWorks_Duty: DutySKU[]) {
    // console.log(exWorks_Duty);
    for (let x = 0; x < exWorks_Duty.length; x++) {
      if (exWorks_Duty[x].Import_Country === "France" || " Holland") {
        const deliv_Price = (exWorks_Duty[x].Delivered_Price =
          exWorks_Duty[x].ExWorks_Price + euShipping + bbbCosts);

        this.deliveredPriceInventory.push(
          new DeliveredSKU(
            exWorks_Duty[x].Brand,
            exWorks_Duty[x].SKU_Name,
            exWorks_Duty[x].Category,
            exWorks_Duty[x].Segment,
            exWorks_Duty[x].Import_Country,
            exWorks_Duty[x].ABV,
            exWorks_Duty[x].Size_CL,
            exWorks_Duty[x].ExWorks_Price,
            exWorks_Duty[x].Duty,
            exWorks_Duty[x].Sale_Price,
            deliv_Price
          )
        );
      }
      if (exWorks_Duty[x].Import_Country === "Australia") {
        const deliv_Price = (exWorks_Duty[x].Delivered_Price =
          exWorks_Duty[x].ExWorks_Price + internationalShipping + bbbCosts);

        this.deliveredPriceInventory.push(
          new DeliveredSKU(
            exWorks_Duty[x].Brand,
            exWorks_Duty[x].SKU_Name,
            exWorks_Duty[x].Category,
            exWorks_Duty[x].Segment,
            exWorks_Duty[x].Import_Country,
            exWorks_Duty[x].ABV,
            exWorks_Duty[x].Size_CL,
            exWorks_Duty[x].ExWorks_Price,
            exWorks_Duty[x].Duty,
            exWorks_Duty[x].Sale_Price,
            deliv_Price
          )
        );
      }
      console.log(this.deliveredPriceInventory);
    }

    // if (cleanData[x].ABV > 22) {
    //   // console.log(2);
    //   const calcHigh =
    //     (32.79 / 100) * cleanData[x].ABV * cleanData[x].Size_CL;
    //   cleanData[x].Duty = calcHigh;
    //   const calcSale = (cleanData[x].Sale_Price =
    //     cleanData[x].ExWorks_Price + cleanData[x].Duty);

    //   this.newInventory.push(
    //     new DutySKU(
    //       cleanData[x].Brand,
    //       cleanData[x].SKU_Name,
    //       cleanData[x].Category,
    //       cleanData[x].Segment,
    //       cleanData[x].Import_Country,
    //       cleanData[x].ABV,
    //       cleanData[x].Size_CL,
    //       cleanData[x].ExWorks_Price,
    //       calcHigh,
    //       calcSale
    //     )
    //   );
  } // console.log(cleanData);
}
// console.log(this.newInventory);

// const app = new DutyCalculator();
// app.dutyCalc();
