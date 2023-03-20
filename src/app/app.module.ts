import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './pastries-calc/calc/calc.component';
import { TotalComponent } from './pastries-calc/total/total.component';
import {PastriesCalcService} from './pastries-calc/pastries-calc.service';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PastriesCalcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
