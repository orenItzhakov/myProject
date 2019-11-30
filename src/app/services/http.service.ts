import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { IBeer } from '../interfaces/beers';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private _url:string = "/api/beers"

  private messageSource = new BehaviorSubject<string>("default");
  currMessage = this.messageSource.asObservable();

  constructor(private http: HttpClient) {

    setTimeout(() => {
      this.messageSource.next("yes");
    }, 3000);
  }

  getFakeDateFromObservable() :Observable<IBeer[]>{
    // return this.http.get('https://api.openbrewerydb.org/breweries');
    return this.http.get<IBeer[]>(this._url);
  }

  getFakeDateFromPromise() :Promise<IBeer[]>{
    // return this.http.get('https://api.openbrewerydb.org/breweries');
    return this.http.get<IBeer[]>(this._url + '/5').toPromise();
  }
}
