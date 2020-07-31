import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonService } from './Common/Common.service'

@Injectable({ providedIn: 'root' }) 
export class mutualfundsholdingsService implements OnInit {
    ngOnInit(): void {
      //  throw new Error("Method not implemented.");
    }

  protected url: string =  this.common.url + '/api/MutualFundHoldings/MutualFundHoldings';

  constructor(private http: HttpClient, private common: CommonService, public sanitizer: DomSanitizer) { }

  // Rest Items Service: Read all REST Items
  getAll() {
    return this.http
      .get<any[]>(this.url)
      .pipe(map(data => data));
  }

}
