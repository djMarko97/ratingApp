import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';

import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage{

  fullname: string;
  email: string;
  password: string;

  loading: any;

  constructor(
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private storage: Storage,
    private router: Router,
    private service: RegisterService
  ){}

  loginPage(){
    this.router.navigate(['/login']);
  }

  async userSignUp(){
    await this.showLoading();
    if(this.email === undefined || this.password === undefined || this.fullname === undefined){
      this.loadingCtrl.dismiss();
      this.showAlert('Signup Error', 'You cannot submit empty fields');
      return;
    }
      
    this.service.registerUser(this.fullname,this.email,this.password)
      .subscribe(res =>{
        
        this.loadingCtrl.dismiss();
        
        if(res.user){
          this.storage.set('useremail',res.user.email);
          this.router.navigate(['/home']);
        }

        if(res.error){
          this.loadingCtrl.dismiss();
          this.showAlert('Signup Error', res.error);
        }
      }); 
      
      this.fullname = '';
      this.email = '';
      this.password = '';
  }

  async showLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait...',
      spinner: 'crescent',
      duration: 3000,
    });

    return await loading.present();//ovako se prikazuje
  }

  async showAlert(header, subHeader){
    const alert = await this.alertCtrl.create({
      header: header,
      subHeader: subHeader,
      buttons: ['OK']
    });

    return await alert.present();
  }

}
