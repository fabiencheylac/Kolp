import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Oldplaylist } from '../models/oldplaylist';

/*
  Generated class for the Apioldplaylist provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiOldPlaylist {
  UrlOldPlaylist = 'http://www.mocky.io/v2/591c4178110000e902824f6e';

    constructor(public http: Http) { }

    load(): Observable<Oldplaylist[]> {
      return this.http.get('http://www.mocky.io/v2/591c4178110000e902824f6e')
        .map(res => <Oldplaylist[]>res.json());
    }
}
