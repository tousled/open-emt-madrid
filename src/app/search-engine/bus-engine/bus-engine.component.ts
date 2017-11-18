import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

import { SearchEngineService } from '../shared/services/search-engine.service';
import { Bus } from '../../shared/bus';
import { BusMad } from '../../shared/bus-mad';
import { ArriveMad } from '../../shared/arrives-mad';
import { BusFormatterService } from '../shared/formatters/bus-formatter';

@Component({
  selector: 'app-bus-engine',
  templateUrl: './bus-engine.component.html',
  styleUrls: ['./bus-engine.component.css']
})
export class BusEngineComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    private _matIconRegristry: MatIconRegistry,
    private _sanitizer: DomSanitizer,
    private _searchEngineService: SearchEngineService,
    private _busFormatterService: BusFormatterService) {
    this.createForm();
    this._matIconRegristry.addSvgIcon('bus-stop', this._sanitizer.bypassSecurityTrustResourceUrl('assets/img/bus-stop.svg'));
    this._matIconRegristry.addSvgIcon('bus-icon', this._sanitizer.bypassSecurityTrustResourceUrl('assets/img/bus-icon.svg'));
  }

  busForm: FormGroup = undefined;
  showBus: Boolean = false;
  buses: Array<Bus> = new Array<Bus>();

  ngOnInit() { }

  public search(): void {
    const stopId: number = this.busForm.get('stop').value;
    this._searchEngineService.getArriveStop(stopId).subscribe((data: ArriveMad) => {
      data.arrives.map((busGeo: BusMad) => this.buses.push(this.mapGeoBuses(busGeo)));
      this.toggleBuses();
    });
  }

  private toggleBuses() {
    this.showBus = !this.showBus;
  }

  private mapGeoBuses(busGeo: BusMad): Bus {
     return this._busFormatterService.buildGeoBuses(busGeo);
  }

  private createForm() {
    this.busForm = this._formBuilder.group({
      stop: ['', Validators.required]
    });
  }

}
