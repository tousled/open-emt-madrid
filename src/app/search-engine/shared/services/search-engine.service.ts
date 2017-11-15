import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchEngineService {

    constructor(private _http: HttpClient) { }

    public getBus(): Array<any> {
        return [];
    }
}
