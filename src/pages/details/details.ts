import { ExpansesService } from './../../app/expanses.service';
//ionic generate page details

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Expanse } from '../../app/expanse.model';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  expanse: Expanse
  categories: [String]

  apply(){
    if (this.expanse.id){
    this.expansesService.apply(this.expanse);
    }else{
      this.expansesService.newExpense(this.expanse);
    }
    this.navCtrl.pop();
  }

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private expansesService: ExpansesService) {

    this.categories = expansesService.categories;

    //this.expanse = navParams.get('expanse');
    //console.log(navParams.data)
    //  The Bundle Way :)
    this.expanse = navParams.get('expanse');
   // alert(JSON.stringify(expansesService.expanseById(this.expanse.id)));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
}
