import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import * as _ from 'lodash';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-profilegym',
  templateUrl: './profilegym.page.html',
  styleUrls: ['./profilegym.page.scss'],
})
export class ProfilegymPage implements OnInit {

  profile: any;
  user: any;

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private alertCtrl: AlertController, 
    private gym: GymService,
    private toastCtrl: ToastController) {

    this.activatedRoute.queryParamMap
      .subscribe((paramsMap: Params) =>{
        this.profile = JSON.parse(paramsMap.params.data);
        
      });
      
   }

   ngOnInit(){
    this.gym.getEmail().then(result=>{
      this.getData(result);
    })
   }
 
   getData(email){
     this.gym.getUserData(email)
     .subscribe(res =>{
       this.user = res.user
     });
   }
  reviewPage(profile){
    this.router.navigate(['/review'],{queryParams:{data: JSON.stringify(profile, null, 4)}});
  }

  viewReviews(profile){
    this.router.navigate(['/viewreview'], {queryParams:{gymData: JSON.stringify(profile,null,4)}});
  }

  averageRating(arr){
    if(arr.length <= 0){
      return arr.length;
    }
    else{
      return this.roundValue(_.mean(arr));
    }
  }

  ratingSum(arr){
    if(arr.length <= 0){
      return arr.length;
    }
    else{
      return _.sum(arr);
    }
  }

  async memberRegister(profile){
    const alert = await this.alertCtrl.create({
      header: 'Register as a member',
      inputs: [
        {
          name: 'role',
          placeholder: 'Add role'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          cssClass: 'alertCss',
          handler: data =>{
            this.gym.registerMember(profile,this.user,data.role)
              .subscribe(res =>{
                if(res.message){
                  this.showToast(res.message);
                }
                if(res.error){
                  this.showToast(res.error); 
                }
                
              })
          }
        }
      ]
    });

    await alert.present();
  }

  async showToast(header) {
    const toast = await this.toastCtrl.create({
      message: header,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  roundValue(value){
    const factor = Math.pow(10,1);
    return Math.round(value * factor)/factor
  }

}
