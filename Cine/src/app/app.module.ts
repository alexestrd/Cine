import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { WatchMoviesComponent } from './Components/watch-movies/watch-movies.component';
import { BuyTicketComponent } from './Components/buy-ticket/buy-ticket.component';
import { MainComponent } from './Components/main/main.component';
import { FUNCIONESComponent } from './Components/funciones/funciones.component';

import {PeliculasService} from './services/peliculas.service';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './Components/tienda/tienda.component';

import { LoginComponent } from './Components/login/login.component';
import { ProductoComponent } from '../app/Components/producto/producto.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WatchMoviesComponent,
    BuyTicketComponent,
    MainComponent,
    FUNCIONESComponent,
    AgregarComponent,
    TiendaComponent,
    LoginComponent,
    ProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    PeliculasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
