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
    return this.common.get(this.WatchListurl);
  }

  public  Post(data) {
    return this.common.Post(this.WatchListurl, data);
  }
}
