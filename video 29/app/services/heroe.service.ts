import { Injectable} from '@angular/core';
import {HEROES} from '../mocks/mock-heroes';
import { Heroe} from '../clases/heroe';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroeService {

    private ruta: string = 'http://127.0.0.1:8080/heroes/getHeroes';
    constructor(private http: Http){

    }

     getHeroes():Heroe[]{
        return HEROES;
    }

    getHeroesRetardo():Promise<Heroe[]>{
        return new Promise<Heroe[]>(
            (resolve) => {
                setTimeout(resolve, 1000)
            }
        ).then(()=> this.getHeroes());
    }
    getHeroe(id:number): Promise<Heroe>{
        return this.getHeroesRetardo().then(
            (heroes) => heroes.find(heroe => heroe.id === id));

    }
    getHeroesHttp():Promise<Heroe[]>{
        return this.http.get(this.ruta)
            .toPromise()
            .then(
                (response) => {
                    let respuesta:any = response;
                    let heroes: Heroe[] = JSON.parse(respuesta._body);
                    return heroes;
                }

            ).catch()
    }
}
