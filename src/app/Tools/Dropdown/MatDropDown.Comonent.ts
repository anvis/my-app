export class DropdownValue {
    value:string;
    label:string;
  
    constructor(value:string,label:string) {
      this.value = value;
      this.label = label;
    }
  }
  
  import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
  //import {MatSelectModule} from '../../../../node_modules/@angular/material/select';

  @Component({
    selector: 'mat-dropdown',
    templateUrl: './Mat-dropdown.component.html'
  })
  export class MatDropdownComponent {
  education_level;
  @Input() values : any;
  value : any;
  @Output() dropdownchange = new EventEmitter
  
    constructor() {
    }

    educationLevelChangeAction(education) {
      this.dropdownchange.emit(education);
    }

    @Output() voted = new EventEmitter<boolean>();
    selectItem(value) {
    }
  }