import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { StationComponent } from './station.component';
import { TrainStation } from '../objects/train-station'
import { StationService } from '../services/station.service';

@Component ({
    templateUrl: 'app/templates/train-stations.component.html',
    directives: [StationComponent]
})

export class TrainStationsComponent implements OnInit {
    public stations: TrainStation[];
    
    constructor(
        private _router: Router,
        private _stationService: StationService
    ) {}
    
    
    gotoStation(station: TrainStation) {
        this._router.navigate(['Station', {stationShortCode: station.stationShortCode}]);
    }
    
    getStations() {
        this._stationService.getStations()
        .then(stations => this.stations = stations);
    }
    
    ngOnInit() {
        this.getStations();
    }
    
}
