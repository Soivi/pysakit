import { Injectable } from 'angular2/core';
import { Train } from '../objects/train';

import { DEPARTURES } from '../mock-departure2';

import { TrainStation } from '../objects/train-station';
import { TRAINSTATIONS } from '../mock-trainstations';

@Injectable()

export class StationService {
    getTrains() {
        return Promise.resolve(DEPARTURES);
    }
    
    getStations() {
        return Promise.resolve(TRAINSTATIONS);
    }
}