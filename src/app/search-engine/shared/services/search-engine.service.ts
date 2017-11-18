import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { BusMad } from '../../../shared/bus-mad';
import { Bus } from '../../../shared/bus';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchEngineService {

    constructor(private _http: Http) { }

    public getArriveStop(idStop: number): Observable<any> {
        return this._http.get(`/api/geo/stop/${idStop}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json();
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    }
}
