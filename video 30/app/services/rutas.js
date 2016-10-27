"use strict";
var heroes_component_1 = require('../componentes/heroes.component');
var router_1 = require('@angular/router');
var dashboard_component_1 = require("../componentes/dashboard.component");
var miHeroeDetalles_1 = require("../componentes/miHeroeDetalles");
var rutas = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashBoardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detalle/:id',
        component: miHeroeDetalles_1.DetalleHeroeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=rutas.js.map