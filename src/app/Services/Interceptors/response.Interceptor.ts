import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpHeaderResponse, HttpEventType }
  from '@angular/common/http';
import { Observable, } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { nextTick } from 'process';
@Injectable()
export class responseInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
         console.log("resonse Interceptor" + req.url);
        
        return next.handle(req).pipe(
           tap(event =>             
            {
                if(event.type === HttpEventType.Response)
                {
                    console.log(event.body);
                }
            })
        ) ;
    }
}