//Make super class?? With NULL properties.

import { CleanSKU } from "./skuClass";

export class DutySKU extends CleanSKU {
  Duty: number;
  Sale_Price: number;

  constructor(
    Brand: string,
    SKU_Name: string,
    Category: string,
    Segment: string,
    Import_Country: string,
    ABV: number,
    Size_CL: number,
    ExWorks_Price: number,
    Duty: number,
    Sale_Price: number
  ) {
    super(
      Brand,
      SKU_Name,
      Category,
      Segment,
      Import_Country,
      ABV,
      Size_CL,
      ExWorks_Price
    );
    this.Duty = Duty;
    this.Sale_Price = Sale_Price;
  }
}

//Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price
