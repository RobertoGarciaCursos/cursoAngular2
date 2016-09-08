import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { DetalleHeroeComponent }  from './componentes/miHeroeDetalles';
import { AppComponent }  from './app.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule],
    declarations: [ AppComponent,  DetalleHeroeComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule {


}

