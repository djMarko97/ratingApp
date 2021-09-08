import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NewratingComponent } from './newrating.component';





@NgModule({
    imports: [CommonModule,
        FormsModule,
        Ionic2RatingModule
    ],
    declarations: [NewratingComponent],
})
export class NewratingModule { }
