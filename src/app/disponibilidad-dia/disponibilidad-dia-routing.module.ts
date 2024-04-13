import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisponibilidadDiaPage } from './disponibilidad-dia.page';

const routes: Routes = [
  {
    path: '',
    component: DisponibilidadDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisponibilidadDiaPageRoutingModule {}
