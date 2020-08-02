import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({ providedIn: 'root' }) 
export class CommonService implements OnInit {
    ngOnInit(): void {
      }

      public url: string = 'https://localhost:44388/api';
      constructor(private http: HttpClient,) { }

      public getData(Endpoint):Promise<any>
      {
        return this.http
        .get<any>(this.url + Endpoint)
        .pipe(map(data => data), retry(3), catchError(this.handleError)).toPromise();
      } 

      public getJsonResponse(Endpoint)
      {
        return this.http
        .get<any>(this.url + Endpoint)
        .pipe(map(data => data), retry(3), catchError(this.handleError));
      }

      public getFullResponse(Endpoint): Observable<HttpResponse<any>> {
        return this.http.get<any>(
          this.url + Endpoint, { observe: 'response' })
          .pipe(retry(3), catchError(this.handleError));
      }

      public Post(Endpoint : string, data)
      {
        return this.http
        .post<any>(this.url + Endpoint, data)
        .pipe(map(data => data));
      }

public deleteWithId(Endpoint : string, id: number) {
  return this.http.delete<any>(this.url + Endpoint + "/" + id, { observe: 'response' }).pipe(map(data => data),
    catchError(this.handleError)
  );
}
      public delete(Endpoint : string, data): Observable<{}> {
        return this.http.delete(this.url + Endpoint, data)
          .pipe(
            catchError(this.handleError)
          );
      }

      public Put(Endpoint : string, data)
      {
        return this.http
        .put<any>(this.url + Endpoint, data)
        .pipe(map(data => data));
      }

      private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong.
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return throwError(
          'Something bad happened; please try again later.');
      }

     public getTextFile(filename: string) {
        // The Observable returned by get() is of type Observable<string>
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        return this.http.get(filename, {responseType: 'text'})
          .pipe(
            tap( // Log the result or error
             // data => this.log(filename, data),
             // error => this.logError(filename, error)
            )
          );
      }

}