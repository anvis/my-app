import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'mat-auto-dropdown',
    templateUrl: './AutoComplete.Component.html',
    styleUrls: ['../../app.component.scss', './AutoComplete.css' ]  
  })
  export class MapAutoDropdownComponent implements OnInit   {
    myControl = new FormControl();
   // options: string[] = ['One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three','One', 'Two', 'Three'];
    @Input() values : any;
    @Output() dropdownchange = new EventEmitter
    filteredOptions: Observable<string[]>;
    selected: string;
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
      return this.values.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  
    onSelectionChange(event)
    { 
        this.dropdownchange.emit(event.option.value);    
    }
  }