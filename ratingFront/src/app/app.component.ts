import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { GymService } from './services/gym/gym.service';
import { StorageService } from './services/storage/storage.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  user: any;

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Create Gym', url: '/creategym', icon: 'create' },
    { title: 'Gyms', url: '/gyms', icon: 'barbell-outline' },
    { title: 'Search', url: '/search', icon: 'search' },
    { title: 'Leaderboard', url: '/leaderboard', icon: 'archive' },

  ];

  constructor(
    private storage: Storage, 
    private router: Router, 
    private navCtrl: NavController, 
    private gym: GymService, 
    private storageService: StorageService) {

    
    // this.gym.getEmail().then(result => {
    //   if (result === null) {
    //     this.router.navigate(['/login'])
    //   }

    //   if (result !== null) {
    //     this.gym.getUserData(result).subscribe(res => {
    //       this.user = res.user;
    //       this.router.navigate(['/home']);
    //     }, () => {
    //       this.router.navigate(['/login'])
    //     });

    //   }

    // });
  }



  ngOnInit() {
    this.storageService.init();
    //await this.storage.create();
   // this.automaticLogin();
    this.gym.getEmail().then(result =>{
      this.getData(result);
    })

    
  }

  getData(email){
    this.gym.getUserData(email)
    .subscribe(res =>{
      this.user = res.user
    });
  }


  /*async automaticLogin(){
    this.storage.get('useremail').then(loggedIn =>{
      if(loggedIn ===null){
        this.router.navigate(['/login']);
      }

      if(loggedIn !== null){
        this.router.navigate(['/home']);
      }
    });
  }*/

  async logout() {
    this.storageService.remove('useremail');
    this.navCtrl.navigateRoot('/login');
  }

  async settings() {
    this.router.navigate(['/settings']);
  }
}
