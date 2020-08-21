import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomBootstrapRoutingModule } from './custom-bootstrap-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CustomBootstrapRoutingModule
  ]
})
export class CustomBootstrapModule { }
