import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import {MutualFundHoldingComponent} from './Components/mutual/mutual.component';
import {WatchListComponent} from './Components/WatchList/watchlist.component';
import {ScreenerComponent} from './Components/Screener/Screener.Component';
import {TransactionComponent} from './Components/Transactions/Transactions.component';
import { mutualfundsholdingsService } from './Services/mutualfundsholdings.service';
import 'ag-grid-enterprise';
import { HomeComponent } from './home/home.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { gridComponent } from './Utilities/grid/grid.component';
import { DropdownComponent } from './Tools/Dropdown/Dropdown.Component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatDropdownComponent} from './Tools/Dropdown/MatDropDown.Comonent';
import {StocksService} from './Services/Stock.Service';
import { addHeader } from './Services/Interceptors/addHeader.Interceptor';
import { responseInterceptor } from './Services/Interceptors/response.Interceptor';
import { filterStocksbyWatchListPipe } from './Pipes/FilterStocksByWatchList.pipe';
import {MatAutocompleteModule,} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [AppComponent,MutualFundHoldingComponent,
    HomeComponent,NavMenuComponent,WatchListComponent, gridComponent,TransactionComponent,
    DropdownComponent,MatDropdownComponent, ScreenerComponent,
    filterStocksbyWatchListPipe],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatSelectModule,MatAutocompleteModule,MatFormFieldModule,MatInputModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'mutual', component: MutualFundHoldingComponent },
      { path: 'watchList', component: WatchListComponent },
      { path: 'transactions', component: TransactionComponent },
      { path: 'screener', component: ScreenerComponent }
    ]),
    BrowserAnimationsModule,
  ],
  providers: [mutualfundsholdingsService, gridComponent, StocksService,
    { provide: HTTP_INTERCEPTORS, useClass: addHeader, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: responseInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}