import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieGenre } from '../entities/movie-genre';
import { MovieDiscover } from '../entities/movie-discover';
import { FavoriteService } from './favorite.service';
import { ResourceLoader } from '@angular/compiler';
import { MovieFind } from '../entities/movie-find';
import { MovieCast } from '../entities/moviecast';


@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  apiKey = '259996b423a7a59734b4c1474dce1064';
  baseUrl = 'https://api.themoviedb.org/3';

  genres: MovieGenre[];

  constructor(private http: HttpClient, private favorite: FavoriteService) {
    this.fetchLocalGenres()
      .then(() => this.fetchNetworkGenres());
  }

  private handleFetchGenres(data: any): MovieGenre[] {
    this.genres = data.genres.map(g => new MovieGenre(g));
    return this.genres;
  }

  fetchLocalGenres(): Promise<MovieGenre[]> {
    return this.http.get('/assets/genres.json')
      .toPromise()
      .then((data: any) => {
        const result = this.handleFetchGenres(data);
        return result;
      });
  }

  fetchNetworkGenres(): Promise<MovieGenre[]> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`;
    return this.http.get(url)
      .toPromise()
      .then((data: any) => this.handleFetchGenres(data));
  }

  private handleDiscover(data: any) {
    const results = data.results.map(item => {
      const md = new MovieDiscover(item);
      md.genres = md.genre_ids.map(id => this.genres.find(genre => genre.id === id));
      md.is_favorite = this.favorite.includes(md.id);
      return md;
    });

    return results;
  }

  localDiscover() {
    return this.http.get('/assets/discover.json')
      .toPromise()
      .then((data: any) => this.handleDiscover(data));
  }

  networkDiscover() {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=true`;
    return this.http.get(url)
      .toPromise()
      .then((data: any) => this.handleDiscover(data));
  }

  search(keywords: string) {
    // https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&include_adult=false&query=${encodeURI(keywords)}`;
    return this.http.get(url)
      .toPromise()
      .then((data: any) => this.handleDiscover(data.results));
  }

  details(id: number) {
    // https://api.themoviedb.org/3/movie/420818?api_key=259996b423a7a59734b4c1474dce1064&language=en-US
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    let movieData = null;
    return this.http.get(url)
      .toPromise()
      .then(data => {
        movieData = data;
        return this.actors(id);
      })
      .then((actors: any) => {
        console.log(actors);
        const movie = new MovieFind(movieData);
        movie.actors = actors.cast.map(actor => new MovieCast(actor));
        movie.is_favorite = this.favorite.includes(movie.id);
        return movie;
      });
  }

  actors(movieId: number) {
    // https://api.themoviedb.org/3/movie/597/credits?api_key=259996b423a7a59734b4c1474dce1064
    const url = `${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`;
    return this.http.get(url)
      .toPromise();
  }

}
