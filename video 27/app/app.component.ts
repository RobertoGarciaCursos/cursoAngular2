import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl: 'app/app-component.html',
    styleUrls: ['app/css/app-component.css']
})

export class AppComponent{

    public titulo:string = 'Lista de Heroes';
}