import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreategymPageRoutingModule } from './creategym-routing.module';

import { CreategymPage } from './creategym.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreategymPageRoutingModule
  ],
  declarations: [CreategymPage]
})
export class CreategymPageModule {}
