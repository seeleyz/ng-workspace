import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HttpComponent } from './http.component';
import { ObservablesComponent } from './observables/observables.component';

const routes: Routes = [
  {
    path: '',
    component: HttpComponent,
    children: [
      { path: 'observable', component: ObservablesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule { }
