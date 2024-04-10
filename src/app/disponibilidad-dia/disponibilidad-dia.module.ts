import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisponibilidadDiaPageRoutingModule } from './disponibilidad-dia-routing.module';

import { DisponibilidadDiaPage } from './disponibilidad-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponibilidadDiaPageRoutingModule
  ],
  declarations: [DisponibilidadDiaPage]
})
export class DisponibilidadDiaPageModule {}
