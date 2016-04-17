import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { StationComponent } from './station.component';

@Component ({
    templateUrl: 'app/templates/favorite.component.html',
    directives: [StationComponent]
})

export class FavoriteComponent {
    constructor(
        private _router: Router
    ) {}
    
    
    gotoStation() {
        this._router.navigate(['Station']);
    }
    
}