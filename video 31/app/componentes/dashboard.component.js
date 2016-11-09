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
var heroe_service_1 = require("../services/heroe.service");
var router_1 = require("@angular/router");
var DashBoardComponent = (function () {
    function DashBoardComponent(heroeService, route) {
        this.heroeService = heroeService;
        this.route = route;
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroeService.getHeroesRetardo().then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    DashBoardComponent.prototype.irDetalle = function (heroe) {
        var link = ['/detalle', heroe.id];
        this.route.navigate(link);
    };
    DashBoardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/componentes/vistas/dashboardcomponent.html',
            styleUrls: ['app/componentes/css/dashboard-component.css']
        }), 
        __metadata('design:paramtypes', [heroe_service_1.HeroeService, router_1.Router])
    ], DashBoardComponent);
    return DashBoardComponent;
}());
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dashboard.component.js.map