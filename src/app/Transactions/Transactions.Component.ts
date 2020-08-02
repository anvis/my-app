import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../Services/Transaction.Service';
import {gridComponent } from '../Utilities/grid/grid.component';
import {FormControl, Validators} from '@angular/forms';
import { WatchListsService } from '../Services/WatchList.Service';

class WatchList {
    name: string;
    id: string;
  }

@Component({
  selector: 'app-root',
  templateUrl: './Transactions.component.html',
  styleUrls: ['../app.component.scss', './Transactions.css' ]  
})
export class TransactionComponent implements OnInit {

  constructor(private _transactionService: TransactionService, private _grid : gridComponent,
    private _watchListService: WatchListsService ) {
  }
 // animalControl = new FormControl('', Validators.required);
   
  
 watchList:any[];
 watchlists : WatchList[]= [];
 watchliststemp : WatchList[] = [];
 getWatchList()
{
    this._watchListService.getData().then(data =>{       
        this.watchList = data;
        if((this.watchList == [])){
           throw 'stop-operation'; 
        }
    })
    .then(response=>{
      this.watchList.forEach(element => {        
        let watchListObj = new WatchList();
        watchListObj.name = element.watchListName;
       watchListObj.id = element.id;
  this.watchlists.push(watchListObj);
    });
}) 
} 

  ngOnInit() {
      debugger;
      this.getWatchList();
    this.getTransactions();  
    this.names = ["Demavand", "Pradeep", "Ashutosh"];
  } 

  transactions: any;
  public names : any;
  
  dropdownchangeevent(data : any) 
  {
      
      debugger;
      alert(data);

  }
  getTransactions(): any {
    this._transactionService.getAll()
      .subscribe(
        x => {
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
 headerName: 'WatchListName', 
 field: 'id',
 editable: true,
 checkboxSelection: true
},

{
    headerName: 'stock Id', 
    field: 'stockId'
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