import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiPlaylist } from '../../providers/api-playlist';
import { Playlist } from '../../models/playlist';
//import { YouTubeIframeLoader} from '@youtube-iframe';
import { YoutubePlayerModule } from 'ng2-youtube-player';





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
player: YT.Player;
private id: string = 'qDuKsiwS5xw';


  constructor(public navCtrl: NavController, public navParams: NavParams, public apiplaylist: ApiPlaylist ) {
    this.apiplaylist.load().subscribe(Playlist => {
      this.Playlist = Playlist;
    })
  }
  savePlayer (player) {
    this.player = player;
    console.log('player instance', player)
  }
  onStateChange(event){
    console.log('player state', event.data);
  }


  likesing(id) {
    console.log("I like this song");
  this.navCtrl.push(PlaylistPage,id);
}



}
