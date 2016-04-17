import { Component } from  'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { FavoriteComponent } from './favorite.component';
import { StationComponent } from './station.component';

@Component({
    selector: 'pysakit',
    templateUrl: 'app/templates/app.component.html',  
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
})
@RouteConfig([
    {
        path: '/favorite',
        name: 'Favorite',
        component: FavoriteComponent,
        useAsDefault: true,
    },
    {
        path: '/station',
        name: 'Station',
        component: StationComponent,
    }
])

export class AppComponent {}