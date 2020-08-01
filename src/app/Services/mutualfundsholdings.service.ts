import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonService } from './Common/Common.service'

@Injectable({ providedIn: 'root' }) 
export class mutualfundsholdingsService implements OnInit {
    ngOnInit(): void {
    }
    constructor(private common: CommonService, public sanitizer: DomSanitizer) { }

    protected Holdings: string =  '/MutualFundHoldings/MutualFundHoldings1';

   getAll() {
    return this.common.getFullResponse(this.Holdings);
  }
}
