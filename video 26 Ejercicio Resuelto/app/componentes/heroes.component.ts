import {Component, OnInit} from '@angular/core';
import {Heroe} from '../clases/heroe';
import {HeroeService} from '../services/heroe.service';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector:'my-heroes',
    templateUrl: 'app/app.html',
    styleUrls:['app/css/app-component.css'],
    providers:[HeroeService]
})

export class HeroesComponent implements OnInit{
    titulo:string = 'Lista de Heroes';
    heroe:Heroe = { id: 1, nombre: 'El Capitán Fanegas'};

    heroes:Heroe[];

    heroeSeleccionado:Heroe;

    constructor(private route: Router, private heroeService:HeroeService ) {
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

    irDetalle(heroe:Heroe): void{
        let link = ['/detalle', heroe.id];
        this.route.navigate(link);
    }
}

