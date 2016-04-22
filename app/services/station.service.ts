import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { DEPARTURES } from '../mock-departure2';

import { Train } from '../objects/train';
import { TrainStation } from '../objects/train-station';

@Injectable()

export class StationService {
    constructor (private http: Http) {}
    
    private _trainStationUrl = 'http://rata.digitraffic.fi/api/v1/metadata/stations';
    
    getTrains() {
        return Promise.resolve(DEPARTURES);
    }
    
    getStations (): Observable<TrainStation[]> {
        return this.http.get(this._trainStationUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }
    
    private extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        let errMsg = error.message || 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
    
}