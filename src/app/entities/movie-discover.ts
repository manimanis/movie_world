import { MovieGenre } from './movie-genre';

export class MovieDiscover {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;

  genres: MovieGenre[];
  is_favorite: boolean;

  constructor(obj: any = {}) {
    this.popularity = obj.popularity || 0;
    this.vote_count = obj.vote_count || 0;
    this.video = obj.video || false;
    this.poster_path = obj.poster_path || '';
    this.id = obj.id || 0;
    this.adult = obj.adult || false;
    this.backdrop_path = obj.backdrop_path || '';
    this.original_language = obj.original_language || '';
    this.original_title = obj.original_title || '';
    this.genre_ids = obj.genre_ids || [];
    this.genres = [];
    this.title = obj.title || '';
    this.vote_average = obj.vote_average || 0.0;
    this.overview = obj.overview || '';
    this.release_date = obj.release_date || '';
    this.is_favorite = false;
  }
}
