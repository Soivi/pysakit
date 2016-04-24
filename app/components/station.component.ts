import { Component, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Train } from '../objects/train';
import { StationService } from '../services/station.service';

@Component({
    templateUrl: 'app/templates/station.component.html',
})

export class StationComponent implements OnInit { 
    trains: Train[];
    errorMessage: string;
    stationShortCode: string;
    
    constructor(
        private _stationService: StationService,
        private _routeParams: RouteParams
    ) {this.stationShortCode = _routeParams.get('stationShortCode');}
    
    getTrains(stationShortCode) {
        this._stationService.getTrains(stationShortCode)
        .subscribe(
        trains => this.trains = trains,
        error =>  this.errorMessage = <any>error
        );
    }
        
    ngOnInit() {
        this.getTrains(this.stationShortCode);
    }
    
}