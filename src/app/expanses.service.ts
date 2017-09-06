// import { Injectable } from '@angular/core';
import { Expanse } from './expanse.model';

// @Injectable()
export class ExpansesService {

  apply(expanse: Expanse): boolean {
    const idx = this.expanseIndexById(expanse.id);
    //alert(idx);

    this.expenses[idx] = expanse;
    //alert(JSON.stringify(this.expenses));
    return true;
  }

  newExpense(expanse:Expanse):void {
    expanse.id = this.expenses.length;
    this.expenses.push(expanse);
  }


  /**
   *
   *
   * @param {number} id
   * @returns {number} the index in the array
   * @memberof ExpansesService
   */
  expanseIndexById(id: number) {
    const e = this.expenses.findIndex((e) => { return e.id === id })
    return e;
  }

  /**
   *
   *
   * @param {number} id
   * @returns {Expanse}
   * @memberof ExpansesService
   */
  expanseById(id: number) {
    const e: Expanse = this.expenses.find((e) => { return e.id === id })
    return e;
  }


  categories: [String] = ['Food', 'Travel', 'Other'];
  /**
   * The Expanses Array
   *
   * @type {[Expanse]}
   * @memberof ExpansesService
   */
  expenses: [Expanse] = [{
    id: 1,
    amount: 7.25,
    date: '2017/09/11',
    description: 'Lunch',
    category: 'Food',
  },
  {
    id: 2,
    amount: 18.9,
    date: '2017/09/12',
    description: 'Train Ticket',
    category: 'Travel'
  },
  {
    id: 3,
    amount: 9,
    date: '2017/09/12',
    description: 'Dinner',
    category: 'Food',
  }];
}
