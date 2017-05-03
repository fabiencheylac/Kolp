import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ChoicePlaylistPage } from '../choiceplaylist/choiceplaylist';
import { SearchPlaylistPage } from '../searchplaylist/searchplaylist';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public pops: PopoverController ) {

  }

  choiceplaylist() {
    this.navCtrl.push(ChoicePlaylistPage);
  }
  searchplaylist() {
    this.navCtrl.push(SearchPlaylistPage);
  }
}
