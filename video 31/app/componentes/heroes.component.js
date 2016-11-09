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
var heroe_service_1 = require('../services/heroe.service');
var router_1 = require("@angular/router");
var HeroesComponent = (function () {
    function HeroesComponent(route, heroeService) {
        this.route = route;
        this.heroeService = heroeService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroeService.getHeroesHttp()
            .then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.seleccionar = function (heroe) {
        this.heroeSeleccionado = heroe;
    };
    HeroesComponent.prototype.irDetalle = function (heroe) {
        var link = ['/detalle', heroe.id];
        this.route.navigate(link);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/componentes/vistas/heroes-component.html',
            styleUrls: ['app/css/app-component.css'],
            providers: [heroe_service_1.HeroeService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, heroe_service_1.HeroeService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map