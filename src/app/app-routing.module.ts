import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';


const routes: Routes = [
  {
    path: 'popular',
    component: DashboardComponent,
  },
  {
    path: 'favorite',
    component: FavoriteMoviesComponent,
  },
  {
    path: 'details/:id',
    component: MovieDetailsComponent,
  },
  {
    path: 'search/:keywords',
    component: SearchMovieComponent,
  },
  {
    path: '',
    redirectTo: 'popular',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
