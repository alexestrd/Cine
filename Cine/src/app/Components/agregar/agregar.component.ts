import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/peliculas';
import { PeliculasService } from '../../services/peliculas.service'

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit {

  movie: Movies = {
    nombre_p:'',
    resumen:'',
    imagen:''
  };

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  guardarpelicula(){
    this.peliculasService.saveMovie(this.movie).subscribe(
      res =>{
        console.log(res)
      },
      err => console.error(err)
    )

  }
}
