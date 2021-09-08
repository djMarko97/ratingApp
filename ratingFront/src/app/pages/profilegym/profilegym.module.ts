import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilegymPageRoutingModule } from './profilegym-routing.module';

import { ProfilegymPage } from './profilegym.page';
import { Ionic2RatingModule } from 'ionic2-rating';

import { RatingnewComponent } from 'src/app/components/ratingnew/ratingnew.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilegymPageRoutingModule,
    Ionic2RatingModule,
    
    
    
  ],
  entryComponents: [RatingnewComponent],
  declarations: [ProfilegymPage, RatingnewComponent]
})
export class ProfilegymPageModule {}
