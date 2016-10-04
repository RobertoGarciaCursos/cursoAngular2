import {HeroesComponent } from '../componentes/heroes.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashBoardComponent} from "../componentes/dashboard.component";

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
    }
        ];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);