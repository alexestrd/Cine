import { Component, OnInit } from '@angular/core';
import { Carrito } from 'src/app/models/carrito';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  productos: any = [];
  producto : Producto = {
    id : 0,
    producto : '',
    descripcion : '',
    cantidad : '',
    precio : '',
    imagen : '',
  }
  carrito: Carrito = {
    id: 0,
    producto : '',
    cantidad : '',
    precio : '',
  }
  constructor() { }

  ngOnInit(): void {
  }

  agregarcarr(){
    const is = this.productos.id;
    console.log(is)
  }
}
