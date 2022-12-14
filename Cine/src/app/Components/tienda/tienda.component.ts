import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import {Producto} from 'src/app/models/producto'
import {Carrito} from 'src/app/models/carrito'
import { __values } from 'tslib';
import { ActivatedRoute } from '@angular/router';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.scss']
})
export class TiendaComponent implements OnInit {
  @ViewChild('prod') prod!: ElementRef;
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

  constructor(private productosService: ProductosService, private activatedRoute: ActivatedRoute) { }

   async ngOnInit() {
    await this.obtenerProductos();

  }
  guardarproducto(){
    this.productosService.saveProductos(this.productos).subscribe(
      res =>{
        console.log(res)
      },
      err => console.error(err)
    )

  }
   agregarcarr(){
    const is = this.productos.id;
    console.log(is)
  }

  async obtenerProductos(){
     await this.productosService.getProducto().subscribe(
      res =>{
        this.productos = res;

      },
      err => console.error(err)
    )
  }

}
