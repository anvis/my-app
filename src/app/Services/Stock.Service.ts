import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonService } from './Common/Common.service'
import {BaseService } from './BaseService'
 
@Injectable({ providedIn: 'root' }) 
export class StocksService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private common: CommonService) { }

    protected WatchListurl: string =  '/Stocks/Stocks';
    
 public  getAll() {
    return this.common.getJsonResponse(this.WatchListurl);
  }

  public  getData() {
    return this.common.getData(this.WatchListurl);
  }

  public  Post(data) {
    return this.common.Post(this.WatchListurl, data);
  }

  public Put(data) {
    return this.common.Put(this.WatchListurl, data);
  }

  public Delete(Id) {
    debugger;
    return this.common.deleteWithId(this.WatchListurl, Id);
  }
}
