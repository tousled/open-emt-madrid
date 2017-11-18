import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchEngineComponent } from './search-engine.component';
import { SearchEngineService } from './shared/services/search-engine.service';
import { SearchEngineRoutingModule } from './search-engine.routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { BusEngineComponent } from './bus-engine/bus-engine.component';
import { BusGeoDetailComponent } from './bus-engine/bus-geo-detail/bus-geo-detail.component';
import { BusFormatterService } from './shared/formatters/bus-formatter';

@NgModule({
    imports: [MaterialComponentsModule,
        SearchEngineRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        HttpModule],
    exports: [SearchEngineComponent, BusEngineComponent, BusGeoDetailComponent],
    declarations: [SearchEngineComponent, BusEngineComponent, BusGeoDetailComponent],
    providers: [SearchEngineService, BusFormatterService],
})
export class SearchEngineeModule { }
