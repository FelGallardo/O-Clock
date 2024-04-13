import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarClientePage } from './agendar-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarClientePageRoutingModule {}
