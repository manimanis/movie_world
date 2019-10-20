import { Component, OnInit, Input } from '@angular/core';
import { MovieDiscover } from '../entities/movie-discover';
import { FavoriteService } from '../services/favorite.service';
import { TmdbService } from '../services/tmdb.service';
import { MovieFind } from '../entities/movie-find';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movieList: MovieDiscover[] = [];

  constructor(private tmdb: TmdbService, private favorite: FavoriteService) { }

  ngOnInit() {
  }

  toggleFavorite(movie: MovieDiscover) {
    const idx = this.favorite.favoriteMoviesIds.indexOf(movie.id);
    if (idx === -1) {
      this.tmdb.details(movie.id)
        .then((mv: MovieFind) => {
          this.favorite.addMovie(mv);
          movie.is_favorite = true;
        });
    } else {
      movie.is_favorite = false;
      this.favorite.removeMovie(this.favorite.favoriteMovies[idx]);
    }
  }

}
