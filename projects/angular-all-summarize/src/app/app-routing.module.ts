import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'http',
    loadChildren: () => import('./http/http.module').then(m => m.HttpModule),
  },
  {
    path: 'custom-bootstrap',
    loadChildren: () => import('./custom-bootstrap/custom-bootstrap.module').then(m => m.CustomBootstrapModule),
  },
  { path: '', redirectTo: '/http', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
