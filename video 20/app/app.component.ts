import {Component, OnInit} from '@angular/core';
import {Heroe} from './clases/heroe';
import {HeroeService} from './services/heroe.service';


@Component({
    selector:'my-app',
    templateUrl: 'app/app.html',
    styleUrls:['./app/css/estilos.css'],
    providers:[HeroeService]
})

export class AppComponent implements OnInit{
    titulo:string = 'Lista de Heroes';
    heroe:Heroe = { id: 1, nombre: 'El Capitán Fanegas'};

    heroes:Heroe[];

    heroeSeleccionado:Heroe;

    constructor(private heroeService:HeroeService ) {
    }

    getHeroes():void{
         this.heroeService.getHeroesRetardo()
            .then(
                (heroes) => {
                    this.heroes = heroes;
                }
            );
    }

    ngOnInit():void{
        this.getHeroes();
    }

    seleccionar(heroe:Heroe){
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    }
}

