import { Injectable } from '@angular/core';
import { TmdbService } from './tmdb.service';
import { MovieFind } from '../entities/movie-find';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoriteMoviesIds = [];
  favoriteMovies = [];

  constructor() {
    this.load();
  }

  load() {
    this.favoriteMoviesIds = JSON.parse(window.localStorage.getItem('favorite-movies-ids') || '[]');
    this.favoriteMovies = JSON.parse(window.localStorage.getItem('favorite-movies') || '[]');
  }

  save() {
    window.localStorage.setItem('favorite-movies-ids', JSON.stringify(this.favoriteMoviesIds));
    window.localStorage.setItem('favorite-movies', JSON.stringify(this.favoriteMovies));
  }

  includes(movieId: number) {
    return this.favoriteMoviesIds.includes(movieId);
  }

  addMovie(movie: MovieFind) {
    if (!this.includes(movie.id)) {
      this.favoriteMoviesIds.splice(0, 0, movie.id);
      this.favoriteMovies.splice(0, 0, movie);
      movie.is_favorite = true;
      this.save();
    }
  }

  removeMovie(movie: MovieFind) {
    const idx = this.favoriteMoviesIds.indexOf(movie.id);
    if (idx !== -1) {
      this.favoriteMoviesIds.splice(idx, 1);
      this.favoriteMovies.splice(idx, 1);
      movie.is_favorite = false;
      this.save();
    }
  }

  toggle(movie: MovieFind) {
    const exists = this.includes(movie.id);
    if (exists) {
      this.removeMovie(movie);
    } else {
      this.addMovie(movie);
    }
    return !exists;
  }
}
