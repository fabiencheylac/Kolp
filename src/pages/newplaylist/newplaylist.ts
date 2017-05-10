import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Newplaylist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-newplaylist',
  templateUrl: 'newplaylist.html',
})
export class NewPlaylistPage {
  genre: Array<string>;
  chemin: string;
  type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.genre=["pop","rock","reggae", "rap", "rnb", "electro", "jazz", "classique", "alternative" ]
    this.chemin="assets/img/"
    this.type=".png"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Newplaylist');
    console.log(this.genre);
  }

}
