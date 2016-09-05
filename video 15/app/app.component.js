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
    }
    AppComponent.prototype.seleccionar = function (heroe) {
        this.heroeSeleccionado = heroe;
        console.log(this.heroeSeleccionado.nombre);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.html',
            styles: ["\n.selected {\n    background-color: #CFD8DC !important;\n    color: white;\n}\n.heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n}\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.6em;\n    border-radius: 4px;\n}\n.heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n}\n.heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .1em;\n}\n.heroes .text {\n    position: relative;\n    top: -3px;\n}\n.heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.8em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.8em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n}\n\n"]
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