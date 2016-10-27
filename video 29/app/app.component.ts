import {Component} from '@angular/core';
import {Heroe} from './clases/heroe';

@Component({
    selector:'my-app',
    templateUrl: 'app/app-component.html',
    styleUrls: ['app/css/app-component.css']
})

export class AppComponent{

    public titulo:string = 'Lista de Heroes';
    public abierto: boolean = false;
    abrir():void{
        this.abierto = true;
    }
    aceptar(nombre: string):void{
        let heroe:Heroe = new Heroe();
        heroe.nombre = nombre;
        console.log(heroe);
    }
}