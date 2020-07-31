import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) 
export class CommonService implements OnInit {
    ngOnInit(): void {
        //  throw new Error("Method not implemented.");
      }

      public url: string = 'https://localhost:44388/api';
      constructor(private http: HttpClient,) { }

     public get(Endpoint)
      {
        return this.http
        .get<any[]>(this.url + Endpoint)
        .pipe(map(data => data));
      }

      public Post(Endpoint, data)
      {
        return this.http
        .post<any[]>(this.url + Endpoint, data)
        .pipe(map(data => data));
      }

}