import { Component, OnInit } from '@angular/core';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  gyms = [];

  constructor(private gym: GymService) { }

  ngOnInit() {
    this.gym.leaderBoard()
      .subscribe(res =>{
        this.gyms = res.result;
      })
  }

}
