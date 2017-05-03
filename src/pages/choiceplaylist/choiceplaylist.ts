import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { NewPlaylistPage } from '../newplaylist/newplaylist';

import { ApiOldPlaylist } from '../../providers/api-old-playlist';
import { ApiLastPlaylist } from '../../providers/api-last-playlist';
import { Lastplaylist } from '../../models/lastplaylist';
import { Oldplaylist } from '../../models/oldplaylist';
/**
 * Generated class for the Choiceplaylist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-choiceplaylist',
  templateUrl: 'choiceplaylist.html',
  providers: [ ApiOldPlaylist, ApiLastPlaylist ]
})
export class ChoicePlaylistPage {
oldplaylist: Oldplaylist[];
lastplaylist: Lastplaylist[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apilastplaylist: ApiLastPlaylist, public apioldplaylist: ApiOldPlaylist) {
    this.apilastplaylist.load().subscribe(lastplaylist => {
      this.lastplaylist = lastplaylist;

    })
    this.apioldplaylist.load().subscribe(oldplaylist => {
      this.oldplaylist = oldplaylist;

    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Choiceplaylist');
  }

  newplaylist() {
    this.navCtrl.push(NewPlaylistPage);
  }

}
