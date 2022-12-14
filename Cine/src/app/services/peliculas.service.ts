import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import {Movies} from '../models/peliculas'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


    getMovies(){
      return this.http.get(`${this.API_URI}/movies`);
    }
    getMovie(id:string){
      return this.http.get(`${this.API_URI}/movies/${id}`);
    }
    deleteMovie(name: string){
      return this.http.delete(`${this.API_URI}/movies/${name}`)
    }
    saveMovie(movies: Movies){
      return this.http.post(`${this.API_URI}/movies`, movies)
    }
    updateMovie(name: string, updateMovie:Movies){
      return this.http.put(`${this.API_URI}/movies/${name}`, updateMovie);
    }
  
}
