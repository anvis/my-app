import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { CommonService } from './Common/Common.service'
 
@Injectable({ providedIn: 'root' }) 
export class TransactionService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private common: CommonService) { }

    protected Transactionurl: string =  '/Transactions/Transactions';
    
 public  getAll() {
    return this.common.getJsonResponse(this.Transactionurl);
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
    debugger;
    return this.common.deleteWithId(this.Transactionurl, Id);
  }
}
