import { Component, OnInit, Input } from '@angular/core';

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
  }
