import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TransactionService } from '../../Services/Transaction.Service';
import {gridComponent } from '../../Utilities/grid/grid.component';
import {FormControl, Validators} from '@angular/forms';
import { WatchListsService } from '../../Services/WatchList.Service';
import { WatchListStocksService } from '../../Services/WatchListStocks.Service';
import { StocksService } from '../../Services/Stock.Service';
import { Stocks, HoldingsGrid } from '../../Models/Stocks';
import { Transactions , PostTransactions} from '../../Models/Transactions';
import { WatchList, WatchListStocks } from '../../Models/WatchList';
import { Sector } from '../../Models/Sector';
import { mutualfundsholdingsService } from '../../Services/mutualfundsholdings.service';
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
    private _watchListService: WatchListsService,
    private _mutualfundsholdingsService: mutualfundsholdingsService ) 
    {       
    }   

    ngAfterViewInit() {
      this.getSectors();
      this.getStockSegements();
      this.getPriceRanges();
      this.getHoldingsData();
    }

    name: string = '';
    sectors: string[] = [];
    sectorsList : Sector[] = [];
    stockSegements : DropDownModel[] = [];
    priceRanges : DropDownModel[] = [];
    StocksData : HoldingsGrid[] = [];
    HoldingsData: HoldingsGrid[] = [];
    tempHoldingdata : HoldingsGrid[] = [];

    SegementSelected : string = "All";
    priceRangeSelected : string = "All";
    sectorSelected: string = "All";
   
    filterSegements : Boolean = false;
    filterPriceRange : Boolean = false;
    filterSectors : Boolean = false;

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
  this.SegementSelected = data.name;
  this.filterData(data.name, 1);
  this.filterSegements = true;
}

filterData(value, changeby)
{
 this.HoldingsData = [];
 this.tempHoldingdata =  this.StocksData;
 let data :  HoldingsGrid[] = [];
 let data1 :  HoldingsGrid[] = [];
 let data2 :  HoldingsGrid[] = [];
debugger;
  if(this.SegementSelected != "All")
  {
    data = this.tempHoldingdata.filter(x => x.mcapCategory == this.SegementSelected);    
  }

  if(this.sectorSelected != "All")
  {
    if(data.length == 0)
    {
      data1 = this.tempHoldingdata.filter(x => x.sector == this.sectorSelected);
      this.filterSectors = true;
    }else
    {
      this.filterSegements = false;
      this.filterSectors = true;
      data1 = data.filter(x => x.sector == this.sectorSelected);
    }    
  }

  if(this.priceRangeSelected != "All")
  {
    debugger;
    var splitted = this.priceRangeSelected.split("-"); 
    var lesserRange = Number(splitted[0]);
    var highRange =Number( splitted[1]);

    if(this.filterSegements)
    {
      data2 =  data.filter(x=>(x.closePrice > lesserRange && x.closePrice < highRange ));
      this.filterPriceRange = true;
      this.filterSegements = false;
    }else if (this.filterSectors)
    {
      data2 =  data1.filter(x=>(x.closePrice > lesserRange && x.closePrice < highRange ));
      this.filterPriceRange = true;
      this.filterSectors = false;
    }else{
      data2 =  this.tempHoldingdata.filter(x=>(x.closePrice > lesserRange && x.closePrice < highRange ));
      this.filterPriceRange = true;
    }

  }
  
if(this.filterSegements)
{
  data.forEach(element => {  
    this.HoldingsData.push(element);
  });

}

if(this.filterSectors)
{
  this.HoldingsData = [];  
  data1.forEach(element => {  
    this.HoldingsData.push(element);
  });
}

if(this.filterPriceRange)
{
  this.HoldingsData = [];  
  data2.forEach(element => {  
    this.HoldingsData.push(element);
  });
}


}

priceRangeChanged(data : DropDownModel)
{
  this.priceRangeSelected = data.name;
  this.filterData(data.name, 2);
  this.filterPriceRange = true;
}

sectorsChanged(data : string)
{
  alert(data);
  this.sectorSelected = data;
  this.filterData(data, 3);
  this.filterSectors = true;
}

getHoldingsData(): any {
  this._mutualfundsholdingsService.getAll()
    .subscribe(
      restItems => {
        this.HoldingsData = restItems.body;
        this.StocksData = restItems.body;
        //console.log(this.restItems);
      }
    )

   // return this.restItems;
}


    modifySectorstoStringArray()
    {      
      this.sectorsList.forEach(element => {
        this.sectors.push(element.sectorName);
      });
    }



    HoldingscolumnDefs = [
      { headerName: 'Sector', field: 'sector', sortable: true, filter: true},
      { headerName: 'stock Name', field: 'stockName', sortable: true, filter: true},
      { headerName: 'Market cap', field: 'mcap', sortable: true, filter: true},
      { headerName: 'Segements', field: 'mcapCategory', sortable: true, filter: true}
     
    ];

    
  // options: string[] = ['One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'];
  options: string[] = ["One", "Two", "Three"]
}