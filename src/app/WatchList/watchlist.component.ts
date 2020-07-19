import { Component, OnInit } from '@angular/core';
import { mutualfundsholdingsService } from '../Services/mutualfundsholdings.service';

// @import './mixins';

@Component({
  selector: 'app-root',
  templateUrl: './watchlist.component.html',
  styleUrls: ['../app.component.scss']  
})
export class WatchListComponent implements OnInit {

  constructor(private _mutualfundsholdingsService: mutualfundsholdingsService) {
  }


  fieldArray: Array<any> = [];
  newAttribute: any = {};

  firstField = true;
  firstFieldName = 'First Item name';
  isEditItems: boolean;
  NewWatchListName: string="";
  tempWatchList: string;

  addFieldValue() {
    this.NewWatchListName = "";
    this.isEditItems = true;
  }

  SaveFieldValue() {
      this.isEditItems = false;
 this.fieldArray.push(this.NewWatchListName);
}

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
  }

  ngOnInit() {  } 
}
