import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiPlaylist } from '../../providers/api-playlist';
import { Playlist } from '../../models/playlist';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';






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
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiplaylist: ApiPlaylist, public YoutubeVideoPlayer:YoutubeVideoPlayer ) {
    this.apiplaylist.load().subscribe(Playlist => {
      this.Playlist = Playlist;

    })

  }
  playVideo(){
  this.YoutubeVideoPlayer.openVideo('Qt2FWAbXinY');
}

  likesing(id) {
    console.log("I like this song");
  this.navCtrl.push(PlaylistPage,id);
}



}
