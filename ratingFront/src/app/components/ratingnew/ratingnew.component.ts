import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ionic2RatingModule } from 'ionic2-rating';

@Component({
  selector: 'app-ratingnew',
  templateUrl: './ratingnew.component.html',
  styleUrls: ['./ratingnew.component.scss'],
})

/*@NgModule({
  imports: [CommonModule,
      FormsModule,
      Ionic2RatingModule
  ],
  
})*/

export class RatingnewComponent {


  @Input() ratenumber: any = {myToggle: true};

  constructor() { }

}
