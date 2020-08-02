import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {MutualFundHoldingComponent} from './mutual/mutual.component'
import {WatchListComponent} from './WatchList/watchlist.component'
import {TransactionComponent} from './Transactions/Transactions.component'
import { mutualfundsholdingsService } from './Services/mutualfundsholdings.service';
import 'ag-grid-enterprise';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { gridComponent } from './Utilities/grid/grid.component';
import { DropdownComponent } from './Tools/Dropdown/Dropdown.Component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatSelectModule} from '../../node_modules/@angular/material/select';
import {MatSelectModule} from '@angular/material/select';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDropdownComponent} from './Tools/Dropdown/MatDropDown.Comonent'


@NgModule({
  declarations: [AppComponent,MutualFundHoldingComponent,
    HomeComponent,NavMenuComponent,WatchListComponent, gridComponent,TransactionComponent,
    DropdownComponent,MatDropdownComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'mutual', component: MutualFundHoldingComponent },
      { path: 'watchList', component: WatchListComponent },
      { path: 'transactions', component: TransactionComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [mutualfundsholdingsService, gridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}