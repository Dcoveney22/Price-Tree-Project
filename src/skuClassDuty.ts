//EXTEND CLASS FROM SUPER CLASS
//Check Superlclass work

export class SKUduty {
  Brand: string;
  SKU_Name: string;
  Category: string;
  Segment: string;
  Import_Country: string;
  ABV: string;
  Size_CL: string;
  ExWorks_Price: string;
  Duty: number;
  SalePrice;

  constructor(
    Brand: string,
    SKU_Name: string,
    Category: string,
    Segment: string,
    Import_Country: string,
    ABV: string,
    Size_CL: string,
    ExWorks_Price: string,
    Duty: number
  ) {
    this.Brand = Brand;
    (this.SKU_Name = SKU_Name),
      (this.Category = Category),
      (this.Segment = Segment),
      (this.Import_Country = Import_Country),
      (this.ABV = ABV),
      (this.Size_CL = Size_CL),
      (this.ExWorks_Price = ExWorks_Price),
      (this.Duty = Duty);
  }
}

//Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price, Duty
