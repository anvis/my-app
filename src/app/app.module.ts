import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {MutualFundHoldingComponent} from './mutual/mutual.component'
import { mutualfundsholdingsService } from './Services/mutualfundsholdings.service';
import 'ag-grid-enterprise';

@NgModule({
  declarations: [AppComponent,MutualFundHoldingComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [mutualfundsholdingsService],
  bootstrap: [MutualFundHoldingComponent]
})
export class AppModule {}