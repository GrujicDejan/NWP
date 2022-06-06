import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieInfoModel } from '../model/movieInfoModel';

@Injectable()
export class MovieService {

  constructor(private httpClient: HttpClient) { }

  BACKEND_BASE = "http://localhost:3000";

  getMovies(query: string): Observable<any> {
    return this.httpClient.get<MovieInfoModel[]>(this.BACKEND_BASE + "/api/movie", {
      params: {query: query}
    })
  }

  changeRating(name: string, changeAmount: number): Observable<any> {
    return this.httpClient.patch(this.BACKEND_BASE + "api/movie/" + name, {
      changeInQuantity: changeAmount
    });
  }

  addMovie(movie: MovieInfoModel): Observable<any> {
    return this.httpClient.post<MovieInfoModel>(this.BACKEND_BASE + "/api/movie", movie)
  }

}
