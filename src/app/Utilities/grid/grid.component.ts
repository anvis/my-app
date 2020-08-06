import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
//import { GridOptions } from 'ag-grid-angular';
//import {ColDef, ColumnApi, GridApi} from 'ag-grid/main';
// import {GridOptions} from "@ag-grid-community/all-modules";
import {GridOptions, GridApi, ColumnApi} from "ag-grid-community";

@Component({
    selector: 'grid',
    templateUrl: './grid.component.html' // ,
    // styleUrls: ['../app.component.scss']
    
  })
  //https://medium.com/better-programming/angular-7-share-component-data-with-other-components-1b91d6f0b93f

  export class gridComponent implements OnInit {
    ngOnInit(): void {
    }

   @Input() gridData : any;
   @Input() Columns : any;
   @Input() AutoGroupColumnDef : any;
   @Output() editedValues = new EventEmitter<JSON>();
   @Output() deletedValues = new EventEmitter<any[]>();
   private gridOptions:GridOptions;
   // gridApi = this.gridOptions.api;
   public api: GridApi;
   private columnApi: ColumnApi;

   onCellValueChanged(params: any) {     
     let d = params.data;
     this.editedValues.emit(params.data);
  }

   rowsSelected() {
    return this.api && this.api.getSelectedRows().length > 0;
}
deleteSelectedRows() {
    const selectRows = this.api.getSelectedRows();
    this.deletedValues.emit(selectRows);
      }

    onGridReady(params): void {
      this.api = params.api;
      this.columnApi = params.columnApi;

      this.api.sizeColumnsToFit();

      // temp fix until AG-1181 is fixed
      this.api.hideOverlay();
  }

  public refreshGrid(data)
  {
    var params = {
      force: true,
      suppressFlash: true,
      rowNodes: data,
    };
    this.api.refreshCells(params);

  }
  }