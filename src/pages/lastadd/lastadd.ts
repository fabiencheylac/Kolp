import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {ApiLastAddMusic} from '../../providers/api-last-add-music';
import {LastAddMusic} from '../../models/lastAddMusic';
//import { TabPlaylist } from '../tabplaylist/tabplaylist';
/**
 * Generated class for the Lastadd page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-lastadd',
  templateUrl: 'lastadd.html',
  providers: [ApiLastAddMusic],
})
export class LastAddPage {



LastAddMusic: LastAddMusic[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apilastaddmusic: ApiLastAddMusic) {
    this.apilastaddmusic.load().subscribe(LastAddMusic => {
      this.LastAddMusic = LastAddMusic;

    })

  }
  likesing(id) {
    console.log("I like this song");
  this.navCtrl.push(LastAddPage,id);
}

}
