import {Component, OnInit} from '@angular/core';
import {Heroe} from '../clases/heroe';
import {HeroeService} from '../services/heroe.service';
import {Router} from "@angular/router";


@Component({
    selector:'my-heroes',
    templateUrl: 'app/componentes/vistas/heroes-component.html',
    styleUrls:['app/css/app-component.css'],
    providers:[HeroeService]
})

export class HeroesComponent implements OnInit{
   

    heroes:Heroe[];

    heroeSeleccionado:Heroe;

    constructor(private route: Router, private heroeService:HeroeService ) {
    }

    getHeroes():void{
        this.heroeService.getHeroesHttp()
            .then(
                (heroes) => {
                    this.heroes = heroes;
                }
            );
    }

    ngOnInit():void{
        this.getHeroes();
    }

    seleccionar(heroe:Heroe):void{
        this.heroeSeleccionado = heroe;
    }

    irDetalle(heroe:Heroe): void{
        let link = ['/detalle', heroe.id];
        this.route.navigate(link);
    }
}

