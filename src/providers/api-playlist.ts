import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Playlist } from '../models/playlist';

/*
  Generated class for the ApiPlaylist provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiPlaylist {
  UrlPlaylist = 'http://www.mocky.io/v2/591c3a5c110000da02824f52';

    constructor(public http: Http) { }

    load(): Observable<Playlist[]> {

      return this.http.get(`${this.UrlPlaylist}`)
        .map(res => <Playlist[]>res.json());
    }

}
