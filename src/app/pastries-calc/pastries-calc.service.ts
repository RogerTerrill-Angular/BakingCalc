import {Injectable} from '@angular/core';
import {Pastry} from '../shared/pastry.model';
import {Subject} from 'rxjs';


@Injectable()
export class PastriesCalcService {
  quantityChanged = new Subject<Pastry[]>();

  private pastries: Pastry[] = [
    new Pastry(
      'Butter Croissant',
      2.50,
      0
    ),
    new Pastry(
      'Cookie',
      1.85,
      0
    )
  ]

  constructor() {
  }

  getPastries() {
    return this.pastries.slice();
  }

  incrementQty(name: string) {
    let pastryIndex = this.pastries.findIndex(pastry => pastry.name === name);
    this.pastries[pastryIndex].quantity++;
    this.quantityChanged.next(this.pastries.slice())
  }

  decrementQty(name: string) {
    let pastryIndex = this.pastries.findIndex(pastry => pastry.name === name);
    this.pastries[pastryIndex].quantity--;
    this.quantityChanged.next(this.pastries.slice())
  }

  getTotalCost() {
    return this.pastries.reduce(
      (sum, current) => sum + (current.cost * current.quantity), 0
    )
  }

  getTotalQty() {
    return this.pastries.reduce(
      (sum, current) => sum + current.quantity, 0
    )
  }
}

