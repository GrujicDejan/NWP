import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  public product!: Product;

  constructor() {
    this.product = {
      name: "Dog food",
      imageURL: "https://pngimg.com/uploads/dog_food/dog_food_PNG53.png",
      price: 300,
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
