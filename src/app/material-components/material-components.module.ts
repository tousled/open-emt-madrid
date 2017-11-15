import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule, MatTabsModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule
  ],
  exports: [
    MatGridListModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
