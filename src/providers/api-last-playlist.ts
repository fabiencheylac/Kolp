import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Lastplaylist } from '../models/lastplaylist';

/*
  Generated class for the Apioldplaylist provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ApiLastPlaylist {
  static get parameters() {
         return [[Http]];
     }



    UrlLastPlaylist = 'http://www.mocky.io/v2/591c415b110000e102824f6d';


    constructor(public http: Http) { }


    load(): Observable<Lastplaylist[]> {
      console.log('bou');
      return this.http.get(`${this.UrlLastPlaylist}`)
        .map(res => <Lastplaylist[]>res.json());
    }


}
