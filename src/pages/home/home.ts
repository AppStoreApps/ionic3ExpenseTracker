import { Expanse } from './../../app/expanse.model';
import { ExpansesService } from './../../app/expanses.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details'


//import {Type} from ..back one folder ../folder/file
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController, private expansesService: ExpansesService) {
    this.expenses = this.expansesService.expenses
  }

  showDetails(expanse: Expanse) {
    //Pass in a single object
    // this.navCtrl.push(DetailsPage, expanse)
    //The Bundle way: pass in an Object of obejects:
    const copy = Object.assign({}, expanse);
    this.navCtrl.push(DetailsPage, { expanse: copy })

  }
  newExpense() {
    const newExpense: Expanse = {amount: 0, description: "", category: "Other", date: "" };
    this.navCtrl.push(DetailsPage, { expanse: newExpense })
  }
  expenses: [Expanse]
}


