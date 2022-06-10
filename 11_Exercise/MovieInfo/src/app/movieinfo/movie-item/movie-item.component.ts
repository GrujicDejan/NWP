import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieInfoModel } from 'src/app/model/movieInfoModel';
import { MovieRatingChange } from 'src/app/model/movieRatingChange';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  //resiti putem emitera
  //input ceo movie 
  //output da kada se u rating unese nova vrednost, da se automatski ona posalje na backend aplikaciju, koristiti change u inputu
  @Input()
  public movie: MovieInfoModel;

  @Output()
  ratingChange: EventEmitter<MovieRatingChange> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  incrementInCart() {
    this.ratingChange.emit({movie: this.movie, changeInRating: 1});
  }

  decrementInCart() {
    if (this.movie.rating > 0) {
      this.ratingChange.emit({movie: this.movie, changeInRating: -1});
    }
  }

}
