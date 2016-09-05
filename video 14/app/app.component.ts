import {Component} from '@angular/core';

const HEROES:Heroe[] = [
    { id: 11, nombre: 'Mr. Nice' },
    { id: 12, nombre: 'Narco' },
    { id: 13, nombre: 'Bombasto' },
    { id: 14, nombre: 'Celeritas' },
    { id: 15, nombre: 'Magneta' },
    { id: 16, nombre: 'RubberMan' },
    { id: 17, nombre: 'Dynama' },
    { id: 18, nombre: 'Dr IQ' },
    { id: 19, nombre: 'Magma' },
    { id: 20, nombre: 'Tornado' }
];

@Component({
    selector:'my-app',
    templateUrl: 'app/app.html',
})

export class AppComponent{
    titulo:string = 'Lista de Heroes';
    heroe:Heroe = { id: 1, nombre: 'El Capitán Fanegas'};

    heroes = HEROES;

    heroeSeleccionado:Heroe;

    constructor() {
    }

    seleccionar(heroe){
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    }
}

export class Heroe{
    id:number;
    public nombre:string;
}