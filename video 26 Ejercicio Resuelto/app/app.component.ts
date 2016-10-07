import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    template:`<h1> {{title}}</h1>
               <nav>
               <ul>
               <a routerLink="/heroes">Mostrar lista heroes</a>
               <a routerLink="/dashboard">Mostrar DashBoard</a>
                </ul>
                </nav>
              <router-outlet></router-outlet>`,
    styleUrls: ['app/css/app-component.css']
})

export class AppComponent{

    public title = 'Vuelta de los Heroes';
}