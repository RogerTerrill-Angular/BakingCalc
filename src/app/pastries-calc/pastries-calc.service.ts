import {Injectable} from '@angular/core';
import {Pastry} from '../shared/pastry.model';


@Injectable()
export class PastriesCalcService {

  private pastries: Pastry[] = [
    new Pastry(
      'Butter Croissant',
      2.50,
      0
    )
  ]

  constructor() {
  }

  getPastries() {
    return this.pastries.slice();
  }
}

