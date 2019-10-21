import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TextTruncPipe } from './text-trunc.pipe';
import { LazyLoadDirective } from './directives/lazy-load.directive';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    DashboardComponent,
    TextTruncPipe,
    LazyLoadDirective,
    FavoriteMoviesComponent,
    MovieDetailsComponent,
    SearchMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
