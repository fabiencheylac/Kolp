
import { NavController, NavParams } from 'ionic-angular';
//import { Component } from '@angular/core';
import { TabPlaylist } from '../tabplaylist/tabplaylist';
//import {PlaylistPage} from "../playlist/playlist";

import { Component, ViewChild, ElementRef } from '@angular/core';
//import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

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
  //providers: [GoogleMaps]
})
export class SearchPlaylistPage {

      @ViewChild('map') mapElement: ElementRef;
      map: any;
      mapInitialised: boolean = false;
      apiKey: 'AIzaSyD1P8-4OLJqHwusZwlvFHn8GQ3LpPQF7-4';

      constructor(public navCtrl: NavController, public geolocation: Geolocation) {}

      ionViewDidLoad(){
          this.loadMap();
      }

      loadMap() {
          this.mapInitialised = true;

          this.geolocation.getCurrentPosition().then((position) => {

          let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

              let mapOptions = {
                  center: latLng,
                  zoom: 16,
                  mapTypeId: google.maps.MapTypeId.ROADMAP,
                  mapTypeControl: false,
                  styles: [
                      //{elementType: 'geometry', stylers: [{color: '#242f3e'}]}
                  ]
              }

              this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

              let marker = new google.maps.Marker({
                  position: latLng
                  /*map: this.map,*/
                  /*icon: '../assets/images/marker.svg'*/
              });

              marker.setMap(this.map);

          }, (err) => {

              console.log(err);

          });
      }

  selectPlaylist(){
    this.navCtrl.push(TabPlaylist);
  }



}
