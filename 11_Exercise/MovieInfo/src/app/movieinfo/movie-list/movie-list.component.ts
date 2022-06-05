import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { MovieInfoModel } from 'src/app/model/movieInfoModel';
import { MovieRatingChange } from 'src/app/model/movieRatingChange';

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
  constructor() { }

  ngOnInit() {
    // this.movies$ = this.searchSubject
    //   .startWith(this.searchTerm)
    //   .debounceTime(300)
    //   .distinctUntilChanged()
    //   .merge(this.reloadMoviesList)
    //   .switchMap((query) => this.skillsService.getMovies(this.searchTerm));
  }

  search() {
    this.searchSubject.next(this.searchTerm);
  }

  onRatingChange(change: MovieRatingChange) {


  }

  onCreate() {
    this.reloadMoviesList.next();
  }

}
