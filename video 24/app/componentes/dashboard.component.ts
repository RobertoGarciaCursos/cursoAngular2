import {Component, OnInit} from '@angular/core';
import {Heroe} from "../clases/heroe";
import {HeroeService} from "../services/heroe.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/componentes/vistas/dashboardcomponent.html'
})

export class DashBoardComponent implements OnInit{


    public heroes: Heroe[];

    constructor(private heroeService: HeroeService){

    }

    ngOnInit(): void{
        this.heroeService.getHeroesRetardo().then(
            (heroes)=> this.heroes = heroes.slice(1, 5))
    }
    irDetalle(heroe:Heroe): void{

    }
}