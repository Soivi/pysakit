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
    constructor(
        private _router: Router,
        private _stationService: StationService
    ) {}
    
    errorMessage: string;
    stations: TrainStation[];
        
    gotoStation(station: TrainStation) {
        this._router.navigate(['Station', {stationShortCode: station.stationShortCode}]);
    }
    
    getStations() {
        this._stationService.getStations()
            .subscribe(
                stations => this.stations = stations,
                error =>  this.errorMessage = <any>error
            );
    }
    
    ngOnInit() {
        this.getStations();
    }
    
}
