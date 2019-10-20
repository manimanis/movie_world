import { Component, OnInit } from '@angular/core';
import { MovieFind } from '../entities/movie-find';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {

  movieList: MovieFind[] = [];

  constructor(private favorite: FavoriteService) { }

  ngOnInit() {
    this.movieList = this.favorite.favoriteMovies;
  }

}
