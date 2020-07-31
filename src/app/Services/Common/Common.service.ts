import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' }) 
export class CommonService implements OnInit {
    ngOnInit(): void {
        //  throw new Error("Method not implemented.");
      }

      public url: string = 'https://localhost:44388';

}