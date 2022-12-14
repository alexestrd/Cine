
import { Component, OnInit,HostBinding } from '@angular/core';
import { Movies } from 'src/app/models/peliculas';

import {PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-watch-movies',
  templateUrl: './watch-movies.component.html',
  styleUrls: ['./watch-movies.component.scss']
})
export class WatchMoviesComponent implements OnInit {
  @HostBinding('class') clases = 'row';

  movies: any = [];
  movies2: any = [];
  movie: Movies = {
    nombre_p:'',
    resumen:'',
    imagen:''
  };


  constructor(private peliculasService: PeliculasService) { }

   async ngOnInit() {
    this.getmovies();
  }


  getmovies(){
    this.peliculasService.getMovies().subscribe(
      res => {
        this.movies = res;
      },
      err => console.error(err)
    )
  }

  deletemovie(nombre_p:string){
    this.peliculasService.deleteMovie(nombre_p).subscribe(
      res =>{
        console.log(res);
        this.getmovies;
      },
      err=> console.error(err)
    )
  }

  guardarpelicula(nombre_p:string){
    this.peliculasService.updateMovie(nombre_p,this.movies2).subscribe(
      res =>{
        console.log(res);
        this.getmovies;
      },
      err => console.error(err)
    )
  }

  getmovie(nombre_p:string){
    this.peliculasService.getMovie(nombre_p).subscribe(
      res =>{
        console.log(res);
        this.movies2 = res;
      },
      err => console.error(err)
    )
  }

}
