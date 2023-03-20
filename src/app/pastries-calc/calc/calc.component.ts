import {Component} from '@angular/core';
import {PastriesCalcService} from '../pastries-calc.service';
import {Pastry} from '../../shared/pastry.model';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.sass'],
  providers: [PastriesCalcService]
})
export class CalcComponent {
  title = 'Baking Calc';
  pastries: Pastry[] | undefined;

  constructor(private pastryCalcService: PastriesCalcService) {
  }

  ngOnInit() {
    this.pastries = this.pastryCalcService.getPastries();
  }

  incrementQty() {
    if(!this.pastries) return;

    this.pastries[0].quantity++;
  }

  decrementQty() {
    if(!this.pastries) return;

    this.pastries[0].quantity--;
  }
}
