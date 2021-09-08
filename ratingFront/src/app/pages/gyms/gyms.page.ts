import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/services/gym/gym.service';

import * as _ from 'lodash';


@Component({
  selector: 'app-gyms',
  templateUrl: './gyms.page.html',
  styleUrls: ['./gyms.page.scss'],
})
export class GymsPage implements OnInit {

  gyms = [];

  rating: Number;
  

  constructor(private gym: GymService, private router: Router) { }

  ngOnInit() {
    this.getAllGyms();
  }

  getAllGyms(){
    this.gym.getAllGyms()
      .subscribe(res =>{
        this.gyms = res.result;
      })
  }

  gymProfile(gym){
    this.router.navigate(['/profilegym'],{queryParams:{data: JSON.stringify(gym, null, 4)}});
  }

  averageRating(number){
    if(number.length <= 0){
      this.rating = number.length;
    } else{
      this.rating = _.mean(number);
    }

    return this.roundValue(this.rating);
  }

  roundValue(value){
    const factor = Math.pow(10,1);
    return Math.round(value * factor)/factor
  }
}
