import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BusMad } from '../../../shared/bus-mad';
import { Bus } from '../../../shared/bus';

@Injectable()
export class SearchEngineService {

    constructor(private _http: HttpClient) { }

    public getBus(): Array<any> {
        const response = new Array<any>();
        for (let i = 0; i < 10; i++) {
            response.push(new Bus(i.toString(), i.toString(), i, i));
        }
        return response;
    }
}
