import {MovieGenre } from './movie-genre';
import { ProductionCompany } from './prodcompany';
import { MovieCast } from './moviecast';

export class MovieFind {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: boolean;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: any[];
  release_date: string;
  revenue: number;
  runtime: string;
  spoken_languages: any[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;

  is_favorite: boolean;
  actors: MovieCast[];

  constructor(obj: any = {}) {
    this.adult = obj.adult || false;
    this.backdrop_path = obj.backdrop_path || '';
    this.belongs_to_collection = obj.belongs_to_collection || false;
    this.budget = obj.budget || 0;
    this.genres = obj.genres || 0;
    this.homepage = obj.homepage || '';
    this.id = obj.id || 0;
    this.imdb_id = obj.imdb_id || 0;
    this.original_language = obj.original_language || '';
    this.original_title = obj.original_title || '';
    this.overview = obj.overview || '';
    this.popularity = obj.popularity || 0;
    this.poster_path = obj.poster_path || '';
    this.production_companies = obj.production_companies || [];
    this.production_countries = obj.production_countries || [];
    this.release_date = obj.release_date || '';
    this.revenue = obj.revenue || 0;
    this.runtime = obj.runtime || '';
    this.spoken_languages = obj.spoken_languages || [];
    this.status = obj.status || true;
    this.tagline = obj.tagline || '';
    this.title = obj.title || '';
    this.video = obj.video || true;
    this.vote_average = obj.vote_average || 0;
    this.vote_count = obj.vote_count || 0;

    this.is_favorite = false;
    this.actors = [];
  }

}
