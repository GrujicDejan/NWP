import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {

  public products!: Observable<Product[]>;

  public product!: Product;

  private reloadProductList: Subject<void> = new Subject();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onQuantityChange(change: ProductQuantityChange) {
    this.productService.changeQuantity(change.product.id, change.changeInQuantity).subscribe((res) => this.reloadProductList.next());
  }

  onCreate() {
    this.reloadProductList.next();
  }

}
