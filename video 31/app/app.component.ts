import {Component} from '@angular/core';
import {Heroe} from './clases/heroe';
import {HeroeService} from "./services/heroe.service";

@Component({
    selector:'my-app',
    templateUrl: 'app/app-component.html',
    styleUrls: ['app/css/app-component.css']
})

export class AppComponent{

    public titulo:string = 'Lista de Heroes';
    public abierto: boolean = false;
    constructor(private heroeervice: HeroeService){

    }
    abrir():void{
        this.abierto = true;
    }
    aceptar(nombre: string):void{
        let heroe:Heroe = new Heroe();
        heroe.nombre = nombre;
        this.heroeervice.insertarHeroeHttp(heroe).then(
            (response)=>{
                console.info(response);
            }
        ).catch()
    }
}