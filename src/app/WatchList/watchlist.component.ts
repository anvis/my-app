import { Component, OnInit } from '@angular/core';
import { WatchListsService } from '../Services/WatchList.Service';
import {gridComponent } from '../Utilities/grid/grid.component';

@Component({
  selector: 'app-root',
  templateUrl: './watchlist.component.html',
  styleUrls: ['../app.component.scss']  
})
export class WatchListComponent implements OnInit {

  constructor(private _watchListService: WatchListsService, private _grid : gridComponent ) {

  }
  fieldArray: Array<any> = [];
  isEditItems: boolean;
  NewWatchListName: string="";

  watchlists: any;
  watchlistsitems: any;
data: any;
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
    //this.watchlistsitems = "";
   // this.watchlistsitems.push({ WatchListName: "sinema" });
    this.data =  { WatchListName: this.NewWatchListName };
    this._watchListService.Post(this.data).subscribe(hero => this.watchlistsitems.push(hero));
   // api.refreshCells();
   this.NewWatchListName = "";
    this.isEditItems = false;
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

  EditWatchList(watchlist: JSON) {   
   this._watchListService.Put(watchlist).subscribe(hero => this.watchlistsitems.push(hero));
  }

  DeleteWatchList(watchlist: any[]) {   
    watchlist.forEach(element => {     // anvi change it to single call      
      this._watchListService.Delete(element.id).subscribe(hero => this.data = hero);
    });   
    this.watchlistsitems = this.data;
    // this._grid.refreshGrid(this.watchlistsitems);
    }

  columnDefs = [
       {
    headerName: 'WatchListName', 
    field: 'watchListName',
    editable: true,
    checkboxSelection: true
}

/*,
dropdown
    { headerName: 'WatchListName', 
    field: 'watchListName', 
    editable: "True",
    cellEditor: 'richSelect',
    checkboxSelection: true,
    cellRenderer: (params) => params.data.watchListName,
    cellEditorParams: {
      values: this.watchlistsitems,
      cellRenderer: (params) => params.value.watchListName
  }
  } ,
  
  {
    field: 'watchListName',
    valueGetter: (params) => params.data.watchListName
}
*/

  ];
}
