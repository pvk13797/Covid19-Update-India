import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private api = "https://api.covid19india.org/data.json";
  // private api = "https://api.covidindiatracker.com/state_data.json";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    if(error.error instanceof ErrorEvent) {
      errorMessage = 'Error: ${error.error.message}';
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest() {
    return this.httpClient.get(this.api).pipe(retry(3), catchError(this.handleError));
  }
}
