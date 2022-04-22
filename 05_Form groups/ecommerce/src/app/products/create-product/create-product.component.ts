import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  message = '';

  constructor() { }

  ngOnInit(): void {
  }

  createProduct(productForm:any) {
    if (productForm.invalid) {
      this.message = "Please correct all errors and try again"
    } else {
      let product : Product = productForm.value.product;
      console.log(productForm)
      console.log(productForm.value)
      console.log(product)
    }
  }

}
