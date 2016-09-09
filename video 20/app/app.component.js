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
var heroe_service_1 = require('./services/heroe.service');
var AppComponent = (function () {
    function AppComponent(heroeService) {
        this.heroeService = heroeService;
        this.titulo = 'Lista de Heroes';
        this.heroe = { id: 1, nombre: 'El Capitán Fanegas' };
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroeService.getHeroesRetardo()
            .then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.seleccionar = function (heroe) {
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            styleUrls: ['./app/css/estilos.css'],
            providers: [heroe_service_1.HeroeService]
        }), 
        __metadata('design:paramtypes', [heroe_service_1.HeroeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map