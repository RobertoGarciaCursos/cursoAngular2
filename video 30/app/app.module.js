"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var miHeroeDetalles_1 = require('./componentes/miHeroeDetalles');
var app_component_1 = require('./app.component');
var heroe_service_1 = require("./services/heroe.service");
var heroes_component_1 = require("./componentes/heroes.component");
var rutas_1 = require("./services/rutas");
var dashboard_component_1 = require("./componentes/dashboard.component");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, rutas_1.routing, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, miHeroeDetalles_1.DetalleHeroeComponent, heroes_component_1.HeroesComponent, dashboard_component_1.DashBoardComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [heroe_service_1.HeroeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map