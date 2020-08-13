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

    protected Stocksurl: string =  '/Stocks/Stocks';
    protected Sectorsurl: string =  '/Stocks/Sectors';
    
 public  getAll() {
    return this.common.getJsonResponse(this.Stocksurl);
  }

  public  getData() {
    return this.common.getData(this.Stocksurl);
  }

  public  Post(data) {
    return this.common.Post(this.Stocksurl, data);
  }

  public Put(data) {
    return this.common.Put(this.Stocksurl, data);
  }

  public Delete(Id) {
    return this.common.deleteWithId(this.Stocksurl, Id);
  }

  public  getSectors() {
    return this.common.getData(this.Sectorsurl);
  }
}
