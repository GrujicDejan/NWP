import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  public product!: Product;

  @Output()
  private quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter;

  public products!: Array<Product>;

  public quantities!: Array<number>;

  constructor(private productService: ProductService) {
    this.quantities = [];

    for (let i = 1; i <= 20; i++) {
      this.quantities.push(i);
    }
  }

  ngOnInit(): void {

  }

  increaseQuantity() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decreaseQuantity() {
    this.quantityChange.emit({product: this.product, changeInQuantity: -1});
  }

  // setQuantity(id:number, value:number) {
  //   this.quantityChange.emit({product: this.product, changeInQuantity: value});
  // }

}
