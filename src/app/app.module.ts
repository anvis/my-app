import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {MutualFundHoldingComponent} from './mutual/mutual.component'
import {WatchListComponent} from './WatchList/watchlist.component'
import { mutualfundsholdingsService } from './Services/mutualfundsholdings.service';
import 'ag-grid-enterprise';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { gridComponent } from './Utilities/grid/grid.component';

@NgModule({
  declarations: [AppComponent,MutualFundHoldingComponent,
    HomeComponent,NavMenuComponent,WatchListComponent, gridComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'mutual', component: MutualFundHoldingComponent },
      { path: 'watchList', component: WatchListComponent }
    ]),
  ],
  providers: [mutualfundsholdingsService, gridComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}