import { Component, OnInit } from '@angular/core';
import { WatchListsService } from '../Services/WatchList.Service';

// @import './mixins';

@Component({
  selector: 'app-root',
  templateUrl: './watchlist.component.html',
  styleUrls: ['../app.component.scss']  
})
export class WatchListComponent implements OnInit {

  constructor(private _watchListService: WatchListsService) {

  }


  fieldArray: Array<any> = [];
  isEditItems: boolean;
  NewWatchListName: string="";

  
  watchlists: any;
  watchlistsitems: any;

  addFieldValue() {
    this.NewWatchListName = "";
    this.isEditItems = true;
  }

  SaveFieldValue() {
      this.isEditItems = false;
 this.fieldArray.push(this.NewWatchListName);
}
  ngOnInit() {
    this.getWatchlist();  
  } 

  saveWatchList() {
    this._watchListService.getAll();
  }

  getWatchlist(): any {
    this._watchListService.getAll()
      .subscribe(
        x => {
          this.watchlistsitems = x;        
        }
      )
      return this.watchlistsitems;
  }

  columnDefs = [
    { headerName: 'Id', field: 'id'},
    { headerName: 'WatchListName', field: 'watchListName'}   
  ];
}
