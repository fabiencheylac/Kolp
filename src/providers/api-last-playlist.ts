import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Lastplaylist } from '../models/lastplaylist';

/*
  Generated class for the Apioldplaylist provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiLastPlaylist {


    UrlLastPlaylist = 'http://www.mocky.io/v2/5901f1d70f0000b915d2ca9d';

    constructor(public http: Http) { }


    load(): Observable<Lastplaylist[]> {
      return this.http.get(`${this.UrlLastPlaylist}`)
        .map(res => <Lastplaylist[]>res.json());
    }


}
