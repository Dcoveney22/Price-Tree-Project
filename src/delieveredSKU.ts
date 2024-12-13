//Make super class?? With NULL properties.

import { DutySKU } from "./dutySKU";

export class DeliveredSKU extends DutySKU {
  Delivered_Price: number;

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
    Sale_Price: number,
    Delivered_Price: number
  ) {
    super(
      Brand,
      SKU_Name,
      Category,
      Segment,
      Import_Country,
      ABV,
      Size_CL,
      ExWorks_Price,
      Duty,
      Sale_Price
    );
    this.Delivered_Price = Delivered_Price;
  }
}

//Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price
