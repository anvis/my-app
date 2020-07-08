import { Component, OnInit } from '@angular/core';

import { mutualfundsholdingsService } from '../Services/mutualfundsholdings.service';

// @import './mixins';

@Component({
  selector: 'app-root',
  templateUrl: './mutual.component.html',

  //styleUrls: ['../../../../node_modules/ag-grid-community/src/styles/ag-grid.scss',
  //            '../../../../node_modules/ag-grid-community/src/styles/ag-theme-alpine/sass/ag-theme-alpine-mixin.scss']
  //styleUrls: ['./Grid.scss']
 // styleUrls: ['./app.component.scss']
  styleUrls: ['../app.component.scss']
  
  
})
export class MutualFundHoldingComponent implements OnInit {

  constructor(private _mutualfundsholdingsService: mutualfundsholdingsService) {
    //  this.getEmployees();
  }

  restItems: any;

  ngOnInit() {
   this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): void {
    this._mutualfundsholdingsService.getAll()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )
  }


  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true},
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }

  ];

}
