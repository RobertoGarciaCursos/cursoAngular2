import {Component, Input} from '@angular/core';
import {Heroe} from '../clases/heroe';
@Component({
    selector:'mi-heroe-detalle',
    templateUrl: './app/componentes/vistas/detalleHeroeComponent.html'
})

export  class DetalleHeroeComponent{

    @Input() heroe:Heroe;
}