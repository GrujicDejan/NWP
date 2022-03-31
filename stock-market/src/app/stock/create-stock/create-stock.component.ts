import { Component, OnInit } from '@angular/core';
// import { privateDecrypt } from 'crypto';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  public stock!: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER']

  constructor() { 
    this.stock = new Stock('test', '', 0, 0, "NASDAQ");
  }

  ngOnInit(): void {
  }

  setStockPrice(price:number) {
    this.stock.price = price;
    this.stock.previousPrice = price;
  }

  createStock(stockForm:any) {
    console.log('Stock form ', stockForm);
    if (stockForm.valid) {
      console.log('Creating stock ', this.stock);
    } else {
      console.error('Stock form is in an invalid state');
    }
  }

}
