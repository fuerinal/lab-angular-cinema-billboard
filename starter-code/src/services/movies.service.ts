import { Injectable } from '@angular/core';
import movies from '../movies';

@Injectable()
export class MoviesService {
  movies = movies;

  // private movies: Array<Object>;
  // private cinemaroom:Object;
  // // let cinemaroom: object = {
  // // id: <number>,
  // // title: <string>,
  // // poster: <string>,
  // // synopsis: <string>,
  // // Genres: <Array<string>>,
  // // year: <number>,
  // // director: <string>,
  // // actors: <Array<string>>,
  // // hours: <Array<string>>,
  // //
  // //   };


  constructor() {

    console.log("hey ");

  }
  //     this.movies = moviesSamples;
  getmovies() {
    console.log(this.movies);
    return this.movies;

  }


  getMovie(id) { }


}
