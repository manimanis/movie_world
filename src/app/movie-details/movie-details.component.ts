import { Component, OnInit, Input } from '@angular/core';
import { MovieDiscover } from '../entities/movie-discover';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { FavoriteService } from '../services/favorite.service';
import { MovieFind } from '../entities/movie-find';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieId: number = 0;
  @Input() movie: MovieFind = new MovieFind();

  movieList: MovieDiscover[] = [];

  constructor(private tmdb: TmdbService, private route: ActivatedRoute, private favorite: FavoriteService) {
    route.params.subscribe(params => {
      this.setMovieId(params['id']);
    });
  }

  setMovieId(id: number) {
    this.movieId = id;
    this.movie = new MovieFind();
    this.tmdb.details(id)
      .then(nm => this.movie = nm);
  }

  ngOnInit() {
  }

  toggleFavorite(movie: MovieFind) {
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
