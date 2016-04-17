import { Component } from 'angular2/core';

import { Traindeparture } from '../objects/traindeparture';

@Component({
    template: `
    <h1>Kervo</h1>
            <span class="badge">{{departure.stationShortCode}}</span> {{departure.scheduledTime}}
    `,
})

export class StationComponent {    
    departure: Traindeparture = {
        "stationShortCode":"KE","stationUICCode":20,"countryCode":"FI","type":"DEPARTURE","trainStopping":true,"commercialStop":true,"commercialTrack":"5","cancelled":false,"scheduledTime":"2016-04-17T11:17:00.000Z","causes":[]
    }

}