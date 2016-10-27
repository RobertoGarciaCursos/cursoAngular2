import {HeroesComponent } from '../componentes/heroes.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashBoardComponent} from "../componentes/dashboard.component";
import {DetalleHeroeComponent} from "../componentes/miHeroeDetalles";

const rutas: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashBoardComponent
    },
    {
        path:'',
        redirectTo: '/dashboard',
        pathMatch:'full'
    },
    {
        path:'detalle/:id',
        component: DetalleHeroeComponent
    }
        ];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);