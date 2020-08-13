import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TransactionService } from '../../Services/Transaction.Service';
import {gridComponent } from '../../Utilities/grid/grid.component';
import {FormControl, Validators} from '@angular/forms';
import { WatchListsService } from '../../Services/WatchList.Service';
import { WatchListStocksService } from '../../Services/WatchListStocks.Service';
import { StocksService } from '../../Services/Stock.Service';
import { Stocks } from '../../Models/Stocks';
import { Transactions , PostTransactions} from '../../Models/Transactions';
import { WatchList, WatchListStocks } from '../../Models/WatchList';
import { Sector } from '../../Models/Sector';
import {DropDownModel } from  '../../Models/Configurations';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSelectModule} from '../../../../node_modules/@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './Screener.Component.html',
  styleUrls: ['../../app.component.scss', './Screener.css' ]  
})
export class ScreenerComponent   {
  constructor(private _transactionService: TransactionService, 
    private _watchListStocksService: WatchListStocksService, 
    private _grid : gridComponent,
    private _stocksService : StocksService,
    private _watchListService: WatchListsService ) 
    {
        //this.loadStates();
        this.getSectors();
    }   
    name: string = '';
    sectors: string[] = [];
    sectorsList : Sector[] = [];

    dropdownchangeevent(data) 
    {
      alert("23");
    }


    getSectors()
    {
      this._stocksService.getSectors().then(data =>{      debugger; 
        this.sectorsList = data;
      });
    }

    // mat code

    
  options: string[] = ['One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'];
  
}