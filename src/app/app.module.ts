import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsControllerComponent } from './products-controller/products-controller.component';
import { ProductsService } from './products.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Products1Service } from './products1.service';
import { HttpClientModule } from '@angular/common/http';
import { SecondComponentComponent } from './second-component/second-component.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductsControllerComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [ProductsService, Products1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
