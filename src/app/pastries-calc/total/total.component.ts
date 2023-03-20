import { Component } from '@angular/core';
import {PastriesCalcService} from '../pastries-calc.service';
import {Pastry} from '../../shared/pastry.model';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.sass']
})
export class TotalComponent {
  pastries: Pastry[] = [];
  totalCost = 0;
  totalQuantity = 0;

  constructor(private pastriesCalcService: PastriesCalcService) {
  }

  ngOnInit() {
    this.totalCost = this.pastriesCalcService.getTotalCost();
    this.totalQuantity = this.pastriesCalcService.getTotalQty();
    this.pastriesCalcService.quantityChanged
      .subscribe(
        (pastries: Pastry[]) => {
          this.pastries = pastries;
          this.totalCost = this.pastriesCalcService.getTotalCost();
          this.totalQuantity = this.pastriesCalcService.getTotalQty();
        }
      )
  }
}
