import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  message = '';

  @Output()
  private productCreated: EventEmitter<void> = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(productForm:any) {
    if (productForm.invalid) {
      this.message = "Please correct all errors and try again"
    } else {
      console.log(productForm)
      let product : Product = productForm.value.product;
      this.productService.createProduct(product).subscribe((res) => {
        console.log("Product created")
        this.productCreated.next();
      });
    }
  }

}
