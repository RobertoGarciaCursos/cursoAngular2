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
var heroe_1 = require('../clases/heroe');
var heroe_service_1 = require("../services/heroe.service");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var DetalleHeroeComponent = (function () {
    function DetalleHeroeComponent(heroeService, route, location) {
        this.heroeService = heroeService;
        this.route = route;
        this.location = location;
    }
    DetalleHeroeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.heroeService.getHeroe(id).then(function (heroe) { return _this.heroe = heroe; });
        });
    };
    DetalleHeroeComponent.prototype.irAtras = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', heroe_1.Heroe)
    ], DetalleHeroeComponent.prototype, "heroe", void 0);
    DetalleHeroeComponent = __decorate([
        core_1.Component({
            selector: 'mi-heroe-detalle',
            templateUrl: './app/componentes/vistas/detalleHeroeComponent.html',
            styleUrls: ['app/componentes/css/heroe-detalles.css'],
        }), 
        __metadata('design:paramtypes', [heroe_service_1.HeroeService, router_1.ActivatedRoute, common_1.Location])
    ], DetalleHeroeComponent);
    return DetalleHeroeComponent;
}());
exports.DetalleHeroeComponent = DetalleHeroeComponent;
//# sourceMappingURL=miHeroeDetalles.js.map