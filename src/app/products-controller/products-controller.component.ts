import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
// import './products-controller.component.css';

@Component({
  selector: 'app-products-controller',
  templateUrl: './products-controller.component.html',
  styleUrls: ['./products-controller.component.css']
})
export class ProductsControllerComponent {

  public productlist: any = [];

  constructor(private _productsservice: ProductsService) {

  }

  ngOnInit() {
    this.productlist = this._productsservice.GetProductDetails();
  }
}
