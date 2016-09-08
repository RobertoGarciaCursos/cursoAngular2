import {Component} from '@angular/core';
import {Heroe} from './clases/heroe';



@Component({
    selector:'my-app',
    templateUrl: 'app/app.html',
    styleUrls:['./app/css/estilos.css']
})

export class AppComponent{
    titulo:string = 'Lista de Heroes';
    heroe:Heroe = { id: 1, nombre: 'El Capitán Fanegas'};

    heroes:Heroe[];

    heroeSeleccionado:Heroe;

    constructor() {
    }

    seleccionar(heroe:Heroe){
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    }
}

