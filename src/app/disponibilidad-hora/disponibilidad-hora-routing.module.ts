import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisponibilidadHoraPage } from './disponibilidad-hora.page';

const routes: Routes = [
  {
    path: '',
    component: DisponibilidadHoraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisponibilidadHoraPageRoutingModule {}
