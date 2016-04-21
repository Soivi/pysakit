import { Component, OnInit } from 'angular2/core';

import { Train } from '../objects/train';
import { StationService } from '../services/station.service';

@Component({
    templateUrl: 'app/templates/station.component.html',
})

export class StationComponent implements OnInit { 
    trains: Train[];
    
    constructor(
        private _stationService: StationService
    ) {}
    
    getTrains() {
        this._stationService.getTrains()
        .then(trains => this.trains = trains);
    }
    
    ngOnInit() {
        this.getTrains();
    }
}