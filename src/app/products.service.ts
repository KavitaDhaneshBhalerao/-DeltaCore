import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  GetProductDetails() {
    return [
      { "id": 1001, "ProductName": "Tools Gears", "info": "Gear tools production specification" },
      { "id": 2001, "ProductName": "Panels", "info": "Switch Gear Panels" },
      { "id": 2008, "ProductName": "DocTonar", "info": "Document Solar Objects" }
    ]
  }
}
