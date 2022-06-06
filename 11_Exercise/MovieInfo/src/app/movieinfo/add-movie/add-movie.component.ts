import { Component, OnInit } from '@angular/core';
import { MovieInfoModel } from 'src/app/model/movieInfoModel';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {

  movie: MovieInfoModel;

  constructor(private movieService: MovieService) { 
  }

  ngOnInit(): void {
  }

  addMovie(movieForm: any) {
    this.movie = movieForm.value;

    this.movie.characters = [];
    for (let i = 0; i < 3; i++) {
      this.movie.characters.push({"name":movieForm.value["characters["+i+"].name"], "playedBy":movieForm.value["characters["+i+"].playedBy"]});
    }
    console.log(this.movie)
    return this.movieService.addMovie(this.movie).subscribe((res) => alert('Created'))
  }

}
