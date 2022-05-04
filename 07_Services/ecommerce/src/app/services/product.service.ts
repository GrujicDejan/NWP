import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../products/model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products!: Product[];

  constructor() { 

    this.products = [];

    this.products.push({
      name: "Dog food",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 300,
      isOnSale: true,
      quantity: 0
    })
    this.products.push({
      name: "Dog food 2",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 500,
      isOnSale: false,
      quantity: 0
    })
    this.products.push({
      name: "Dog food 3",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 400,
      isOnSale: true,
      quantity: 0
    })

  }

  getProducts() : Observable<Product[]> {
    console.log("servis: getProducts method is being called");
    return of(this.products);
  }

  createProduct(product: Product) : Observable<any> {
    let productClone = Object.assign({}, product);
    console.log("servis: createProduct method is being called")
    this.products.push(product);
    return of(productClone);
  }



}
