import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarClientePageRoutingModule } from './agendar-cliente-routing.module';

import { AgendarClientePage } from './agendar-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarClientePageRoutingModule
  ],
  declarations: [AgendarClientePage]
})
export class AgendarClientePageModule {}
