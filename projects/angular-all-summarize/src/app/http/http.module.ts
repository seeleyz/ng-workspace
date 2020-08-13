import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRoutingModule } from './http-routing.module';
import { HttpComponent } from './http.component';
import { ObservablesComponent } from './observables/observables.component';


@NgModule({
  declarations: [HttpComponent, ObservablesComponent],
  imports: [
    CommonModule,
    HttpRoutingModule
  ]
})
export class HttpModule { }
