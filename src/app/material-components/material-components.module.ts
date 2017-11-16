import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule, MatTabsModule, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    MatGridListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: []
})
export class MaterialComponentsModule { }
