import { Component, OnInit } from '@angular/core';
import { mutualfundsholdingsService } from '../../Services/mutualfundsholdings.service';
import {gridComponent} from '../../Utilities/grid/grid.component';

// @import './mixins';

@Component({
  selector: 'app-root',
  templateUrl: './mutual.component.html',
  styleUrls: ['../../app.component.scss']
  
})
export class MutualFundHoldingComponent implements OnInit {

  constructor(private _mutualfundsholdingsService: mutualfundsholdingsService) {  
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
          this.restItems = restItems.body;
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
