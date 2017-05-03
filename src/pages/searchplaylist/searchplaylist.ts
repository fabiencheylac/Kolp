
import { NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
declare var google;

/**
 * Generated class for the Searchplaylist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-searchplaylist',
  templateUrl: 'searchplaylist.html',
})
export class SearchPlaylistPage {
  /*
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  ionViewDidLoad(){
 let mapOptions = {
 center: new google.maps.LatLng(this.latitude,this.longitude),
 zoom: 15,
 mapTypeId: google.maps.MapTypeId.ROADMAP
 }
 this.map = new google.maps.Map(
 this.mapElement.nativeElement, mapOptions);
 }
 */
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }





}
