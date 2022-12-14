import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { BuyTicketComponent } from './Components/buy-ticket/buy-ticket.component';
import { HomeComponent } from './Components/home/home.component';
import { MainComponent } from './Components/main/main.component';
import { TiendaComponent } from './Components/tienda/tienda.component';
import { WatchMoviesComponent } from './Components/watch-movies/watch-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'cartelera', component: WatchMoviesComponent},
  { path: 'comprar', component: BuyTicketComponent},
  { path: 'inicio', component: MainComponent},
  { path: 'agregar', component: AgregarComponent},
  { path: 'tienda', component: TiendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
