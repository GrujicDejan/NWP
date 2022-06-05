import { Component, Input, OnInit } from '@angular/core';
import { MovieInfoModel } from 'src/app/model/movieInfoModel';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  //resiti putem emitera
  //input ceo movie 
  //output da kada se u rating unese nova vrednost, da se automatski ona posalje na backend aplikaciju, koristiti change u inputu

  constructor() { }

  ngOnInit(): void {
  }

}
