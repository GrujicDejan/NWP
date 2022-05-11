import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../products/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: Product[];

  host = 'http://localhost:3000/'

  constructor(private httpClient: HttpClient) { 

  }

  getProducts() : Observable<Product[]> {
    console.log("servis: getProducts method is being called");
    return this.httpClient.get<Product[]>(this.host + "api/product"); 
  }

  createProduct(product: Product) : Observable<any> {
    console.log("servis: createProduct method is being called")
    return this.httpClient.post(this.host + 'api/product/', product); 
  }

  changeQuantity(id: number, changeInQuantity: number) {
    console.log("servis: changeQuantity method is being called")
    return this.httpClient.put(this.host + "api/product/" + id, {changeInQuantity: changeInQuantity});
  }

}
