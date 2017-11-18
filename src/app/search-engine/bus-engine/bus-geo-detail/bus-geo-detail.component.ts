import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Bus } from '../../../shared/bus';

@Component({
    selector: 'app-bus-geo-detail',
    templateUrl: 'bus-geo-detail.component.html',
    styleUrls: ['bus-geo-detail.component.css']
})

export class BusGeoDetailComponent implements OnInit {

    @Input() bus: Bus;

    constructor(private _router: RouterModule) { }

    ngOnInit() { }

    public showMap(latitude: string, longitude: string): void {
        console.log(latitude + ', ' + longitude);
    }

}
