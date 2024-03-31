import { Injectable } from '@angular/core';
import { Iproducts } from './Interfaces/productdata';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Products1Service {

  public URL: string = "./assets/data/productslist.json";

  constructor(public hobj: HttpClient) { }

  public GetProductInfo(): Observable<Iproducts[]> {
    return this.hobj.get<Iproducts[]>(this.URL);
  }
}
