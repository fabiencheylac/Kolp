import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiPlaylist } from '../../providers/api-playlist';
import { Playlist } from '../../models/playlist';
//import { youtubeiframe } from 'youtubeiframe';






/**
 * Generated class for the Playlist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html',
  providers: [ApiPlaylist],
})
export class PlaylistPage {
Playlist: Playlist[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiplaylist: ApiPlaylist ) {
    this.apiplaylist.load().subscribe(Playlist => {
      this.Playlist = Playlist;

    })


  }
  /*
   YouTubeIframeLoader = require('youtubeiframe');

YouTubeIframeLoader.load(function(YT) {
    new YT.Player('player1', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE'
    });
});

*/
  likesing(id) {
    console.log("I like this song");
  this.navCtrl.push(PlaylistPage,id);
}



}
