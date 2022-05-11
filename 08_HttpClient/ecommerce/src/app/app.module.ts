import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    CreateProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }