import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { Ionic2RatingModule } from 'ionic2-rating';

import { GymsPageRoutingModule } from './gyms-routing.module';

import { GymsPage } from './gyms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GymsPageRoutingModule,
    Ionic2RatingModule
  ],
  declarations: [GymsPage]
})
export class GymsPageModule {}
