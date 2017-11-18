import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { BusMad } from '../../../shared/bus-mad';
import { Bus } from '../../../shared/bus';
import { BUS_GEO_VARIABLES } from '../variables';

@Injectable()
export class BusFormatterService {

    constructor(private http: Http) { }

    private TIME_MAX: any = 999999;

    public buildGeoBuses(bus: BusMad): Bus {

        return new Bus(
            <number>bus.busId,
            bus.lineId,
            bus.destination,
            bus.busDistance,
            this.getTimeLeft(bus.busTimeLeft),
            bus.latitude,
            bus.longitude
        );
    }

    private getTimeLeft(busTimeLeft: number): string {

        if (busTimeLeft === BUS_GEO_VARIABLES.TIME_MAX_SERVER) {
            return BUS_GEO_VARIABLES.PLUS_20_MINUTES;
        }

        if (busTimeLeft === BUS_GEO_VARIABLES.TIME_MIN_SERVER) {
            return '>>>';
        }

        const minutes = Math.floor(busTimeLeft / 60);
        const seconds = busTimeLeft % 60 < 10 ? '0' + busTimeLeft % 60 : busTimeLeft % 60;
        return minutes + ' minutos ' + seconds + ' segundos';
    }

}
