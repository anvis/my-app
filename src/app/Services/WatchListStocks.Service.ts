import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonService } from './Common/Common.service'
 
@Injectable({ providedIn: 'root' }) 
export class WatchListStocksService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private common: CommonService) { }

    protected Transactionurl: string =  '/watchlist/WatchListStocks';
    
 public  getAll() {
    return this.common.getJsonResponse(this.Transactionurl);
  }

  public  getAllwithId(Id : number) {
    return this.common.getDatawithId(this.Transactionurl, Id);
  }


  public  getData() {
    return this.common.getData(this.Transactionurl);
  }

  public  Post(data) {
    return this.common.Post(this.Transactionurl, data);
  }

  public Put(data) {
    return this.common.Put(this.Transactionurl, data);
  }

  public Delete(Id) {
    return this.common.deleteWithId(this.Transactionurl, Id);
  }
}
