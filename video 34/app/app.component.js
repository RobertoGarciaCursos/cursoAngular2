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
var heroe_1 = require('./clases/heroe');
var heroe_service_1 = require("./services/heroe.service");
var AppComponent = (function () {
    function AppComponent(heroeervice) {
        this.heroeervice = heroeervice;
        this.titulo = 'Lista de Heroes';
        this.abierto = false;
    }
    AppComponent.prototype.abrir = function () {
        this.abierto = true;
    };
    AppComponent.prototype.aceptar = function (nombre) {
        var heroe = new heroe_1.Heroe();
        heroe.nombre = nombre;
        this.heroeervice.insertarHeroeHttp(heroe).then(function (response) {
            console.info(response);
        }).catch();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app-component.html',
            styleUrls: ['app/css/app-component.css']
        }), 
        __metadata('design:paramtypes', [heroe_service_1.HeroeService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map