import { Component } from  'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { FavoriteComponent } from './favorite.component';
import { TrainStationsComponent } from './train-stations.component';
import { StationComponent } from './station.component';

import { StationService } from '../services/station.service';

@Component({
    selector: 'pysakit',
    templateUrl: 'app/templates/app.component.html',  
  directives: [ROUTER_DIRECTIVES],
  providers: [
      ROUTER_PROVIDERS,
      StationService
      ],
})
@RouteConfig([
    {
        path: '/favorite', name: 'Favorite', component: FavoriteComponent, useAsDefault: true,
    },
    {
        path: '/trainstations', name: 'TrainStations', component: TrainStationsComponent,
    },
    {
        path: '/station/:stationShortCode', name: 'Station', component: StationComponent,
    },
])

export class AppComponent {}