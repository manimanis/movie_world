import { Component, OnInit } from '@angular/core';
import { MovieDiscover } from '../entities/movie-discover';
import { TmdbService } from '../services/tmdb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movieList: MovieDiscover[] = [];

  constructor(private tmdb: TmdbService) { }

  ngOnInit() {
    this.tmdb.localDiscover()
      .then(ml => {
        this.movieList = ml;
        return ml;
      })
      .then(ml => this.tmdb.networkDiscover())
      .then(ml => {
        this.movieList = ml;
        return ml;
      });
  }

}
