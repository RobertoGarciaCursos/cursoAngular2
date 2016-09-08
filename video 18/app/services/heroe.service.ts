import { Injectable} from '@angular/core';
import {HEROES} from '../mocks/mock-heroes';
import { Heroe} from '../clases/heroe';

@Injectable()
export class HeroeService {

    private getHeroes():Heroe[]{
        return HEROES;
    }

}
