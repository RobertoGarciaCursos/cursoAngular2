import {HeroesComponent } from '../componentes/heroes.component';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const rutas: Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    }
                    ];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);