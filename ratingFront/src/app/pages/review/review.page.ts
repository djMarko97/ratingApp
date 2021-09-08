import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  service: number;
  staff: number;
  equipement: number;
  hygiene: number;
  overall: number;
  review: string;
  userId: any;
  
  gymProfile: any;
  name: string;

  constructor(private activatedRoute: ActivatedRoute, private gym: GymService, private toastCtrl: ToastController) { 
    this.activatedRoute.queryParamMap
      .subscribe((paramsMap: Params)=>{
        this.gymProfile = JSON.parse(paramsMap.params.data);
        
        this.name = this.gymProfile.gymname;
      })
  }

  ngOnInit(){
    this.gym.getEmail().then(result=>{
      this.getData(result);
    })
   }

  async addReview(){
    this.gym.addGymReview(this.gymProfile._id,this.service,this.staff,this.equipement,this.hygiene,this.overall,this.review,this.userId)
      .subscribe(res=>{
        if(res.message){
          this.showToast(res.message);
        }
        if(res.error){
          this.showToast(res.error);
        }
      })
      this.review = '';
  }

  
 
   getData(email){
     this.gym.getUserData(email)
     .subscribe(res =>{
       console.log(res);
       this.userId = res.user._id
     });
   }

  async showToast(header) {
    const toast = await this.toastCtrl.create({
      message: header,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

}
