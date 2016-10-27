import {Component, OnInit} from '@angular/core';
import {Heroe} from "../clases/heroe";
import {HeroeService} from "../services/heroe.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/componentes/vistas/dashboardcomponent.html',
    styleUrls: ['app/componentes/css/dashboard-component.css']
})

export class DashBoardComponent implements OnInit{


    public heroes: Heroe[];

    constructor(private heroeService: HeroeService, private route: Router){

    }

    ngOnInit(): void{
        this.heroeService.getHeroesRetardo().then(
            (heroes)=> this.heroes = heroes.slice(1, 5))
    }
    irDetalle(heroe:Heroe): void{
        let link = ['/detalle', heroe.id];
        this.route.navigate(link);
    }
}