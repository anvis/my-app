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

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatSelectModule} from '../../../../node_modules/@angular/material/select';
import { configuration, DropDownModel } from  '../../Models/Configurations';

@Component({
  selector: 'app-root',
  templateUrl: './Screener.Component.html',
  styleUrls: ['../../app.component.scss', './Screener.css' ]  
})
export class ScreenerComponent implements AfterViewInit   {
  constructor(private _transactionService: TransactionService, 
    private _watchListStocksService: WatchListStocksService, 
    private _grid : gridComponent,
    private _stocksService : StocksService,
    private _watchListService: WatchListsService ) 
    {       
    }   

    ngAfterViewInit() {
      this.getSectors();
      this.getStockSegements();
      this.getPriceRanges();
    }

    name: string = '';
    sectors: string[] = [];
    sectorsList : Sector[] = [];
    stockSegements : DropDownModel[] = [];
    priceRanges : DropDownModel[] = [];

    sectorsChanged(data) 
    {
      alert(data);
    }

    getSectors()
    {
       this._stocksService.getSectors().then(data =>{       
        this.sectorsList = data;
        if((this.sectorsList == [])){
           throw 'stop-operation'; 
        }
    })
    .then(response=>{
      this.sectorsList.forEach(element => {     
        this.sectors.push(element.sectorName);
    });
  });
    }

    getStockSegements()
{
  let config = new configuration();
 this.stockSegements =  config.GetSegements();
}

getPriceRanges()
{
  let config = new configuration();
 this.priceRanges =  config.GetPriceRanges();
}

segementsChanged(data : DropDownModel)
{
alert("rr");
}

    modifySectorstoStringArray()
    {      
      this.sectorsList.forEach(element => {
        this.sectors.push(element.sectorName);
      });
    }

    // mat code

    
  // options: string[] = ['One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'];
  options: string[] = ["One", "Two", "Three"]
}