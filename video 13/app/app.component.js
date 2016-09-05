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
var HEROES = [
    { id: 11, nombre: 'Mr. Nice' },
    { id: 12, nombre: 'Narco' },
    { id: 13, nombre: 'Bombasto' },
    { id: 14, nombre: 'Celeritas' },
    { id: 15, nombre: 'Magneta' },
    { id: 16, nombre: 'RubberMan' },
    { id: 17, nombre: 'Dynama' },
    { id: 18, nombre: 'Dr IQ' },
    { id: 19, nombre: 'Magma' },
    { id: 20, nombre: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.titulo = 'Lista de Heroes';
        this.heroe = { id: 1, nombre: 'El Capitán Fanegas' };
        this.heroes = HEROES;
        this.heroeSeleccionado = Heroe;
    }
    AppComponent.prototype.seleccionar = function (heroe) {
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Heroe = (function () {
    function Heroe() {
    }
    return Heroe;
}());
exports.Heroe = Heroe;
//# sourceMappingURL=app.component.js.map