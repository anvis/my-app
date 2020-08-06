import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import { nextTick } from 'process';
@Injectable()
export class addHeader implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // alert('a');
        //alert(req.url);
        console.log("add header" + req.url);
        let temp = req.clone(
            {
                setHeaders: {'Avengers': 'Thor'}
            }
        );
        return next.handle(temp);
    }
}