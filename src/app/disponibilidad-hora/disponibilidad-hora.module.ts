import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisponibilidadHoraPageRoutingModule } from './disponibilidad-hora-routing.module';

import { DisponibilidadHoraPage } from './disponibilidad-hora.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisponibilidadHoraPageRoutingModule
  ],
  declarations: [DisponibilidadHoraPage]
})
export class DisponibilidadHoraPageModule {}
