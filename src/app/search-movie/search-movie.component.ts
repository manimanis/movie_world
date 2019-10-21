import { Component, OnInit } from '@angular/core';
import { MovieDiscover } from '../entities/movie-discover';
import { TmdbService } from '../services/tmdb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

  keywords = '';

  movieList: MovieDiscover[] = [];

  constructor(private tmdb: TmdbService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.searchByKeyword(params['keywords']));
   }

  searchByKeyword(keywords: string) {
    this.movieList = [];
    this.keywords = keywords;
    if (keywords) {
      this.tmdb.search(keywords)
      .then(ml => {
        this.movieList = ml;
        return ml;
      });
    }
  }

  ngOnInit() {
  }

}
