import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewratingComponent } from 'src/app/components/newrating/newrating.component';

import { IonicModule } from '@ionic/angular';

import { ViewreviewPageRoutingModule } from './viewreview-routing.module';

import { ViewreviewPage } from './viewreview.page';
import { NewratingModule } from 'src/app/components/newrating/newrating.module';
import { RatingnewComponent } from 'src/app/components/ratingnew/ratingnew.component';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewreviewPageRoutingModule,
    Ionic2RatingModule
        
  ],
  entryComponents: [RatingnewComponent],
  declarations: [ViewreviewPage, RatingnewComponent],
  
})
export class ViewreviewPageModule {}
