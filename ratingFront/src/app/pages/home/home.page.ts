import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GymService } from 'src/app/services/gym/gym.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: any;

  constructor(
    private router: Router,
    private gym: GymService) { }


  ngOnInit() {
    this.gym.getEmail().then(result => {
      this.getData(result);
    })
  }

  getData(email) {
    this.gym.getUserData(email)
      .subscribe(res => {
        this.user = res.user;
      });
  }

  openPage() {
    this.router.navigate(['/creategym']);
  }

  reviewPage() {
    this.router.navigate(['/review']);
  }

  addGym() {
    this.router.navigate(['/creategym']);
  }

  goToSearch() {
    this.router.navigate(['/search']);
  }

}
