import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonService } from './Common/Common.service'

@Injectable({ providedIn: 'root' }) 
export class WatchListsService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private common: CommonService, public sanitizer: DomSanitizer) { }

    protected WatchListurl: string =  '/watchlist/watchlist';
    
 public  getAll() {
    return this.common.getJsonResponse(this.WatchListurl);
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
