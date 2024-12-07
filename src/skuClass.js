"use strict";
//Make super class?? With NULL properties.
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKU = void 0;
var SKU = /** @class */ (function () {
    // Duty: number;
    // Sale_Price: number;
    function SKU(Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price
    // Duty: number,
    // Sale_Price: number
    ) {
        this.Brand = Brand;
        this.SKU_Name = SKU_Name;
        this.Category = Category;
        this.Segment = Segment;
        this.Import_Country = Import_Country;
        this.ABV = ABV;
        this.Size_CL = Size_CL;
        this.ExWorks_Price = ExWorks_Price;
        // this.Duty = Duty;
        // this.Sale_Price = Sale_Price;
    }
    return SKU;
}());
exports.SKU = SKU;
//Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price
