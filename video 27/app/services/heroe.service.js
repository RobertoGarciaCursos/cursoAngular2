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
var mock_heroes_1 = require('../mocks/mock-heroes');
var HeroeService = (function () {
    function HeroeService() {
    }
    HeroeService.prototype.getHeroes = function () {
        return mock_heroes_1.HEROES;
    };
    HeroeService.prototype.getHeroesRetardo = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, 1000);
        }).then(function () { return _this.getHeroes(); });
    };
    HeroeService.prototype.getHeroe = function (id) {
        return this.getHeroesRetardo().then(function (heroes) { return heroes.find(function (heroe) { return heroe.id === id; }); });
    };
    HeroeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], HeroeService);
    return HeroeService;
}());
exports.HeroeService = HeroeService;
//# sourceMappingURL=heroe.service.js.map