import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DetalleHeroeComponent }  from './componentes/miHeroeDetalles';
import { AppComponent }  from './app.component';
import {HeroeService} from "./services/heroe.service";
import {HeroesComponent} from "./componentes/heroes.component";
import {routing} from "./services/rutas";
import {DashBoardComponent} from "./componentes/dashboard.component";
import {HttpModule} from "@angular/http";
@NgModule({
    imports:      [ BrowserModule, FormsModule, routing, HttpModule],
    declarations: [ AppComponent,  DetalleHeroeComponent, HeroesComponent, DashBoardComponent],
    bootstrap:    [ AppComponent ],
    providers:[HeroeService]
})
export class AppModule {


}

