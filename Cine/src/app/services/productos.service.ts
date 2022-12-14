import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

import { Producto } from '../models/producto'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  
  API_URI = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


    getProducto(){
      return this.http.get(`${this.API_URI}/productos`);
    }
    getProductos(id:string){
      return this.http.get(`${this.API_URI}/productos/${id}`);
    }
    deleteProductos(name: string){
      return this.http.delete(`${this.API_URI}/productos/${name}`)
    }
    saveProductos(movies: Producto){
      return this.http.post(`${this.API_URI}/productos`, movies)
    }
    updateProductos(name: string, updateMovie:Producto){
      return this.http.put(`${this.API_URI}/productos/${name}`, updateMovie);
    }

}
