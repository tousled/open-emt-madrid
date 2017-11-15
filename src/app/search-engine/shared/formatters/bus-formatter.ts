import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BusMad } from '../../../shared/bus-mad';
import { Bus } from '../../../shared/bus';

@Injectable()
export class BusFormatterService {

    constructor(private http: Http) { }

    public buildBus(bus: BusMad): Bus {
        return new Bus(bus.line, bus.name, bus.distance, bus.distancePreviousStop);
    }

}
