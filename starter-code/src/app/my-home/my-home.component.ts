import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../../services/movies.service';
import moviesList from '../../movies';


import movies from '../../movies';
@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
movies: Object[]=movies;

  constructor(public servicio:MoviesService) { }

  ngOnInit() {
this.movies=moviesList;

  }

  showMovies(){
    this.servicio.getmovies();
}


}
