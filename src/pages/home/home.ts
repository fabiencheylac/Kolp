import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ChoicePlaylistPage } from '../choiceplaylist/choiceplaylist';
import { SearchPlaylistPage } from '../searchplaylist/searchplaylist';
import { AboutPage } from '../about/about';
import { CguPage } from '../../cgu';


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

  aboutus() {
    this.navCtrl.push(AboutPage);
  }

  cguview() {
    this.navCtrl.push(CguPage);
  }

}
