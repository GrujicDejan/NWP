import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/merge';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieInfoModel } from 'src/app/model/movieInfoModel';
import { MovieRatingChange } from 'src/app/model/movieRatingChange';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public movies$: Observable<MovieInfoModel[]>;
  public searchTerm: string = '';

  private searchSubject: Subject<string> = new Subject();
  private reloadMoviesList: Subject<void> = new Subject();

  //injektovati
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.searchSubject
      .startWith(this.searchTerm)
      .debounceTime(300)
      .distinctUntilChanged()
      .merge(this.reloadMoviesList)
      .switchMap((query) => this.movieService.getMovies(this.searchTerm));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onRatingChange(change: MovieRatingChange) {
    this.movieService.changeRating(change.movie.name, change.changeInRating).subscribe(res => {
      this.reloadMoviesList.next()
    });
  }

  onCreate() {
    this.reloadMoviesList.next();
  }

}
