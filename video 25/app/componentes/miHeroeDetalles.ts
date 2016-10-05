import {Component, Input, OnInit} from '@angular/core';
import {Heroe} from '../clases/heroe';
import {HeroeService} from "../services/heroe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
@Component({
    selector:'mi-heroe-detalle',
    templateUrl: './app/componentes/vistas/detalleHeroeComponent.html'
})

export  class DetalleHeroeComponent implements OnInit{

    @Input() heroe:Heroe;

    constructor(private heroeService: HeroeService,
                private route: ActivatedRoute,
                private location: Location){

    }

    ngOnInit():void{
        this.route.params.forEach((params: Params) =>
        {
            let id = +params['id'];
            this.heroeService.getHeroe(id).then(
              heroe => this.heroe = heroe);
        });
    }

    irAtras(){
        this.location.back();
    }
}