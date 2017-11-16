import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SearchEngineComponent } from './search-engine.component';
import { SearchEngineService } from './shared/services/search-engine.service';
import { SearchEngineRoutingModule } from './search-engine.routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { BusEngineComponent } from './bus-engine/bus-engine.component';

@NgModule({
    imports: [MaterialComponentsModule,
        SearchEngineRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule],
    exports: [SearchEngineComponent, BusEngineComponent],
    declarations: [SearchEngineComponent, BusEngineComponent],
    providers: [SearchEngineService],
})
export class SearchEngineeModule { }
