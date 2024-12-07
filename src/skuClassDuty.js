"use strict";
//EXTEND CLASS FROM SUPER CLASS
//Check Superlclass work
Object.defineProperty(exports, "__esModule", { value: true });
exports.SKUduty = void 0;
var SKUduty = /** @class */ (function () {
    function SKUduty(Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price, Duty) {
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
    return SKUduty;
}());
exports.SKUduty = SKUduty;
//Brand, SKU_Name, Category, Segment, Import_Country, ABV, Size_CL, ExWorks_Price, Duty
