import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product!: Product;
  public product2!: Product;
  public product3!: Product;

  public quantities!: Array<number>;

  constructor() {
    this.quantities = [];

    for (let i = 1; i <= 20; i++) {
      this.quantities.push(i);
    }

    this.product = {
      name: "Dog food",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 300,
      isOnSale: true,
      quantity: 0
    }
    this.product2 = {
      name: "Dog food 2",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 500,
      isOnSale: false,
      quantity: 0
    }
    this.product3 = {
      name: "Dog food 3",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 400,
      isOnSale: true,
      quantity: 0
    }
  }

  ngOnInit(): void {
    
  }

  increaseQuantity() {
    this.product.quantity++;
  }

  decreaseQuantity() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }
}
