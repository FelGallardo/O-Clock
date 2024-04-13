import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarDiaPageRoutingModule } from './agendar-dia-routing.module';

import { AgendarDiaPage } from './agendar-dia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarDiaPageRoutingModule
  ],
  declarations: [AgendarDiaPage]
})
export class AgendarDiaPageModule {}
