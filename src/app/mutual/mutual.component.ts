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
  rowData: any;

  ngOnInit() {
    this.rowData = this.getRestItems();
  }

  // Read all REST Items
  getRestItems(): any {
    this._mutualfundsholdingsService.getAll()
      .subscribe(
        restItems => {
          this.restItems = restItems;
          console.log(this.restItems);
        }
      )

      return this.restItems;
  }
   

  columnDefs = [
    { headerName: 'Sector', field: 'sector', sortable: true, filter: true,rowGroup: true},
    { headerName: 'stock Name', field: 'stockName', sortable: true, filter: true,rowGroup: true},
    { headerName: 'Market cap', field: 'mcap', sortable: true, filter: true}
   
  ];

  autoGroupColumnDef = {
    headerName: 'stock Name',
    field: 'stockName',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
        checkbox: true
    }
};

  
}
