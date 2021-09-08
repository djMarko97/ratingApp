import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as _ from 'lodash';
import * as moment from 'moment';


@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.page.html',
  styleUrls: ['./viewreview.page.scss'],
})
export class ViewreviewPage implements OnInit {

  gym: any;


  constructor(private activatedRoute: ActivatedRoute, private alertCtrl: AlertController) {
    this.activatedRoute.queryParamMap
      .subscribe((paramsMap: Params) => {
        this.gym = JSON.parse(paramsMap.params.gymData);
        console.log(this.gym);

      });
  }

  ngOnInit() {
  }

  GetReviewTime = (time: number) => {
    return moment(time).fromNow();
  }

  async averageRating(arr) {
    if (arr.length <= 0) {
      return arr.length;
    } else {
      return _.mean(arr);
    }
  }

  async showAlert(rating) {
    const alert = await this.alertCtrl.create({
      header: 'Review',
      subHeader: rating.review,
      buttons: ['OK']
    });

    return await alert.present();
  }

}
