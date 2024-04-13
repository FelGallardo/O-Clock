import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarDiaPage } from './agendar-dia.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarDiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarDiaPageRoutingModule {}
