import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { RegisterService } from 'src/app/services/register.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

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
  
  
  registerPage(){
    this.router.navigate(['/register']);
  }

  async login(){
    await this.showLoading();
    if(this.email === undefined || this.password === undefined){
      
      this.loadingCtrl.dismiss();
      this.showAlert('Login Error', 'You cannot submit empty fields');
      return;
    }
      
    this.service.loginUser(this.email,this.password)
      .subscribe(res =>{
        this.loadingCtrl.dismiss();
        if(res.user){
          this.storage.set('useremail', res.user.email)
          this.router.navigate(['/home']);
        }

        if(res.error){
          this.loadingCtrl.dismiss();
          this.showAlert('Login Error', res.error);
        }
      }); 
      
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
