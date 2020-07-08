////import { Injectable, Inject } from '@angular/core';
////import { Http, Response } from '@angular/http';
////import { Observable } from 'rxjs/Observable';
//import { Router } from '@angular/router';
////import 'rxjs/add/operator/map';
////import 'rxjs/add/operator/catch';
////import 'rxjs/add/observable/throw';


//import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';


//@Injectable({
//  providedIn: 'root'
//})
////export class mutualfundsholdingsService {

////  constructor(private httpClient: HttpClient) { }

////  public getNews() {
////    return this.httpClient.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.API_KEY}`);
////  }
////}

//// @Injectable()
//export class EmployeeService {
//  myAppUrl: string = "";

//  constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
//    this.myAppUrl = baseUrl;
//  }


//  getEmployees() {
//    return this._http.get(this.myAppUrl + 'api/Employee/Index')
//      .map((response: Response) => response.json())
//      .catch(this.errorHandler);
//  }

//  errorHandler(error: Response) {
//    console.log(error);
//    return Observable.throw(error);
//  }

//  //login(userName, password) {

//  //  var customer = { userName: userName, password: password }
//  //  return this._http.post(this.myAppUrl + 'api/login/login', customer)
//  //    .map((response: Response) => response.json())
//  //    .catch(this.errorHandler);


//  //}
//}

import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' }) 
export class mutualfundsholdingsService implements OnInit {
    ngOnInit(): void {
      //  throw new Error("Method not implemented.");
    }

  // protected url: string = 'https://reqres.in/api/users/2';

  protected url: string = 'https://localhost:44388/api/MutualFundHoldings/MutualFundHoldings';

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  // Rest Items Service: Read all REST Items
  getAll() {
    return this.http
      .get<any[]>(this.url)
      .pipe(map(data => data));
  }

}
