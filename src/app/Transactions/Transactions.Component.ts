import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { TransactionService } from '../Services/Transaction.Service';
import {gridComponent } from '../Utilities/grid/grid.component';
import {FormControl, Validators} from '@angular/forms';
import { WatchListsService } from '../Services/WatchList.Service';
import { WatchListStocksService } from '../Services/WatchListStocks.Service';
import { StocksService } from '../Services/Stock.Service';
import { Stocks } from '../Models/Stocks';
import { Transactions , TransactionType, PostTransactions} from '../Models/Transactions';
import { WatchList, WatchListStocks } from '../Models/WatchList';
import {DropDownModel } from '../Models/DropDownModel';
//import { debug } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './Transactions.component.html',
  styleUrls: ['../app.component.scss', './Transactions.css' ]  
  //providers: [WatchListsService]
})
export class TransactionComponent implements AfterViewInit  {
  constructor(private _transactionService: TransactionService, 
    private _watchListStocksService: WatchListStocksService, 
    private _grid : gridComponent,
    private _stocksService : StocksService,
    private _watchListService: WatchListsService ) {
  } 

  
 watchList:any[];
 watchlists : DropDownModel[]= [];
 watchlists2 : DropDownModel[] = [];
 watchlists2Removed : DropDownModel[] = [];
 watchListIdToAdd : number = 0 ;
 SelectedwatchListStocksList : WatchListStocks[] = [];
 watchListStocksList : WatchListStocks[] = [];
 addTransactions : boolean = false;
 TransactionQuantity : number = 0;
 TransactionPrice: number = 0 ;
 TransactionType: TransactionType[] = this.getTransactionList();
  transactions: Transactions[];
  gridTransactions : Transactions[];
saveTransactions : PostTransactions[] = [] ;
 Stocks : Stocks[] = [] ;
 dropDownModel : DropDownModel[] = [];
 StocksList : DropDownModel[] = [] ;
 selectedStock : string;
 
@ViewChild(gridComponent, {static: false}) grid: gridComponent;

ngAfterViewInit() {
  this.getWatchList();
  this.getTransactions();
  this.getStocks();  
} 

 assign()
{
    let selectedRows =  this.grid.api.getSelectedRows();
    selectedRows.forEach(element => {
        let watchListStocksobj = new  WatchListStocks();
    watchListStocksobj.WatchlistId = this.watchListIdToAdd;
    watchListStocksobj.StockId = element.stockId;
    watchListStocksobj.TransactionId = element.id;
    this.SelectedwatchListStocksList.push(watchListStocksobj);
    });
    this._watchListStocksService.Post(this.SelectedwatchListStocksList).subscribe(hero => hero);
}
addTransaction()
{
  this.addTransactions = true;
}

saveTransaction()
{
  this.addTransactions = false;
let tran =  new PostTransactions();
let d = this.selectedStock;
  tran.stockId= 1;
  tran.quantity= Number(this.TransactionQuantity);
  tran.price= Number(this.TransactionPrice);
  tran.transactionType= "s";
  this.saveTransactions.push(tran);  
this._transactionService.Post(this.saveTransactions).subscribe(data => (this.transactions =  data, this.gridTransactions = data));
}

deleteTransaction(Transactions: any[])
{debugger;
  Transactions.forEach(element => {
    this._transactionService.DeleteWithId(element.id).subscribe(data => (this.transactions =  data, this.gridTransactions = data)); 
  });
 //this._transactionService.Delete(Transactions).subscribe(data => data); // (this.transactions =  data, this.gridTransactions = data));
}


changeClient(value) {
  debugger;
  console.log(value);
  this.selectedStock = value;
}

getTransactionList()
{

  let trans = new Transactions();
return trans.TransactionTypeList;
}
 getWatchList()
{
       let watchListObj = new DropDownModel();
        watchListObj.name = "Un-Assigned";
       watchListObj.id = 0;
      
  this.watchlists2.push(watchListObj);

    this._watchListService.getData().then(data =>{       
        this.watchList = data;
        if((this.watchList == [])){
           throw 'stop-operation'; 
        }
    })
    .then(response=>{
      this.watchList.forEach(element => {        
        let dropDownModel = new DropDownModel();
        dropDownModel.name = element.watchListName;
        dropDownModel.id = element.id;
  this.watchlists.push(dropDownModel);
  this.watchlists2.push(dropDownModel);
    });
}) 
} 

getStocks()
{
    this._stocksService.getData().then(data =>{       
        this.Stocks = data;
        if((this.watchList == [])){
           throw 'stop-operation'; 
        }
    })
    .then(response=>{
      this.Stocks.forEach(element => {        
        let dropDownModel = new DropDownModel();
        dropDownModel.name = element.stockName;
        dropDownModel.id = element.stockId;
  this.StocksList.push(dropDownModel);
    });
});
}

getWatchListStocks(id: number)
{
  this._watchListStocksService.getAllwithId(id).subscribe(data => this.watchListStocksList =  data);
 return this.watchListStocksList;
}

  dropdownchangeevent(data : DropDownModel) 
  {
    this.watchlists2Removed.forEach(element => {  
    this.watchlists2.push(element);
    });
    this.watchlists2Removed = [];
      var index = this.watchlists2.indexOf(data);
      if(index > 0)
      {
      this.watchlists2.splice(index, 1);
      this.watchlists2Removed.push(data);
      }
     
      this.watchListIdToAdd = data.id;
  }

  dropdownchangeevent2(data : DropDownModel) 
  {
    let transactionsOfWatchList = this.getWatchListStocks(data.id);
    this.gridTransactions = [];

    transactionsOfWatchList.forEach(element => { 
this.gridTransactions.push( this.transactions.find(i=>i.id == element.transactionId));
    });
  } 
  
  getTransactions(): any {
    this._transactionService.getAll()
      .subscribe(
        x => {
         this.gridTransactions = x;
          this.transactions = x;        
        }
      )
      return this.transactions;
  }

  action(value: any)
  {
      debugger;
let x = value;

  }

  columnDefs = [ 

{
    headerName: 'stock Name', 
    field: 'stockName',
    checkboxSelection: true
},
{
    headerName: 'quantity', 
    field: 'quantity'
},
{
    headerName: 'price', 
    field: 'price'
},
{
    headerName: 'transaction Type', 
    field: 'transactionType'
}

]
}