import { SKU } from "./skuClass";
import { SKUduty } from "./skuClassDuty";

export class DutyCalculator {
  inventory = [
    {
      brand: "Godet Cognac",
      sku_name: " VSOP",
      category: " Cognac",
      segment: " Premium",
      import_country: "France",
      abv: 21,
      size_cl: 0.70,
      exWorks_price: 24.0,
    },
    {
      brand: "Hedonistas de la Fe",
      sku_name: " Espadin",
      category: " Mezcal",
      segment: " Premium",
      import_country: " Holland",
      abv: 46,
      size_cl: 0.70,
      exWorks_price: 34.0,
    },
  ];
  async dutyCalc() {
    for (let x = 0; x < this.inventory.length; x++) {
        if (this.inventory[x].abv <= 22){
          let calcLow = ((29.54 / 100) * (this.inventory[x].abv) * (this.inventory[x].size_cl))
          this.inventory[x].duty = calcLow
          this.inventory[x].salePrice = (this.inventory[x].exWorks_price) + (this.inventory[x].duty)

        }if (this.inventory[x].abv > 22){
          let calcHigh = ((32.79 / 100) * (this.inventory[x].abv) * (this.inventory[x].size_cl))
          this.inventory[x].duty = calcHigh
          this.inventory[x].salePrice = (this.inventory[x].exWorks_price) + (this.inventory[x].duty)
        }
       console.log(this.inventory)
      }
  } 

}

const app = new DutyCalculator();
app.dutyCalc();
