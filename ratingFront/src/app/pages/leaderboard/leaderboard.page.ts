import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  gyms = [];

  constructor(private gym: GymService, private router: Router) { }

  ngOnInit() {
    this.gym.leaderBoard()
      .subscribe(res =>{
        this.gyms = res.result;
      })
  }

  gymProfile(gym){
    this.router.navigate(['/profilegym'],{queryParams:{data: JSON.stringify(gym, null, 4)}});
  }

}
