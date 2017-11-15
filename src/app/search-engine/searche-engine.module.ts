import { NgModule } from '@angular/core';

import { SearchEngineComponent } from './search-engine.component';
import { SearchEngineService } from './shared/services/search-engine.service';
import { SearchEngineRoutingModule } from './search-engine.routing.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

@NgModule({
    imports: [MaterialComponentsModule,
        SearchEngineRoutingModule],
    exports: [SearchEngineComponent],
    declarations: [SearchEngineComponent],
    providers: [SearchEngineService],
})
export class SearchEngineeModule { }
