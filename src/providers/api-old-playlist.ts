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
  UrlOldPlaylist = 'http://www.mocky.io/v2/591c3a9a1100009a02824f55';

    constructor(public http: Http) { }

    load(): Observable<Oldplaylist[]> {
      return this.http.get('http://www.mocky.io/v2/591c3a9a1100009a02824f55')
        .map(res => <Oldplaylist[]>res.json());
    }
}
