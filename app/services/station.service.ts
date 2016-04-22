import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Train } from '../objects/train';
import { Observable } from 'rxjs/Observable';

import { DEPARTURES } from '../mock-departure2';

import { TrainStation } from '../objects/train-station';
import { TRAINSTATIONS } from '../mock-trainstations';

@Injectable()

export class StationService {
    constructor (private http: Http) {}
    
    private _trainStationUrl = 'app/mock-trainstations.json';
    
    getTrains() {
        return Promise.resolve(DEPARTURES);
    }
    
    getStations (): Promise<TrainStation[]> {
        return this.http.get(this._trainStationUrl)
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body.data || { };
    }
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
}