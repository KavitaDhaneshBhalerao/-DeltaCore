import { Component } from '@angular/core';
import { Products1Service } from '../products1.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {

  public ListProduct: any = [];

  constructor(public obj: Products1Service) { }

  ngOnInit() {
    return this.obj.GetProductInfo().subscribe(data => this.ListProduct = data)
  }

}
