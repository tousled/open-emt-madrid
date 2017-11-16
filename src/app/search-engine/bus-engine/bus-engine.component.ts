import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchEngineService } from '../shared/services/search-engine.service';
import { Bus } from '../../shared/bus';

@Component({
  selector: 'app-bus-engine',
  templateUrl: './bus-engine.component.html',
  styleUrls: ['./bus-engine.component.css']
})
export class BusEngineComponent implements OnInit {

  constructor(private _searchEngineService: SearchEngineService) { }

  lineFormControl: FormControl = undefined;
  stopFormControl: FormControl = undefined;
  showBus: Boolean = false;
  buses: Array<Bus> = undefined;

  ngOnInit() {
    this.lineFormControl = new FormControl();
    this.stopFormControl = new FormControl();
  }

  public search(): void {
    this.buses = this._searchEngineService.getBus();
    this.showBus = true;
  }

}
