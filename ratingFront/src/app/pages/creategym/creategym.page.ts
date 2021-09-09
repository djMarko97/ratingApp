import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { GymService } from 'src/app/services/gym/gym.service';

@Component({
  selector: 'app-creategym',
  templateUrl: './creategym.page.html',
  styleUrls: ['./creategym.page.scss'],
})
export class CreategymPage implements OnInit{

  name: string;
  address: string;
  place: string;
  type: string;
  website: string;
  userId: any;

  constructor(
    private gym: GymService, 
    private alertCtrl: AlertController, 
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController) { }

  ngOnInit(){
   this.gym.getEmail().then(result=>{
     this.getData(result);
   })
  }

  getData(email){
    this.gym.getUserData(email)
    .subscribe(res =>{
      console.log(res);
      this.userId = res.user._id
    });
  }

  

  register(){
    this.gym.createGym(this.name,this.address,this.place,this.type,this.website, this.userId)
      .subscribe(res =>{
        
        if(res.message){
          this.showToast(res.message);
        }

        if(res.error){
          this.loadingCtrl.dismiss();
          this.showAlert('Error', res.error);
        }
      });

      this.refresh();
      
  }

  async showAlert(header, subHeader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subHeader,
      buttons: ['OK']
    });

    return await alert.present();
  }

  async showToast(header) {
    const toast = await this.toastCtrl.create({
      message: header,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  refresh(){
    this.name = '';
      this.address = '';
      this.place = '';
      this.type = '';
      this.website = '';
  }

}
