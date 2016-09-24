"use strict";
var heroes_component_1 = require('../componentes/heroes.component');
var router_1 = require('@angular/router');
var rutas = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(rutas);
//# sourceMappingURL=rutas.js.map