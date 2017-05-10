import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { LastAddMusic } from '../models/lastAddMusic';

/*
  Generated class for the ApiLastAddMusic provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiLastAddMusic {
  UrlLastAddMusic = 'http://www.mocky.io/v2/591190df12000048050fb67b';

    constructor(public http: Http) { }

    load(): Observable<LastAddMusic[]> {

      return this.http.get(`${this.UrlLastAddMusic}`)
        .map(res => <LastAddMusic[]>res.json());
    }
}
