import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


import { LastAddPage } from "../lastadd/lastadd";
import { SearchYoutubePage } from '../searchyoutube/searchyoutube';
import { PlaylistPage } from '../playlist/playlist';


/**
 * Generated class for the Tabplaylist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabplaylist',
  templateUrl: 'tabplaylist.html',
})
export class TabPlaylist {
  tab1Root: any = PlaylistPage;
  tab2Root: any = LastAddPage;
  tab3Root: any = SearchYoutubePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabplaylist');
  }

}
