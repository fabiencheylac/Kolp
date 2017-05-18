import { Component, ViewChild } from '@angular/core';
import {  Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';


import { AboutPage } from '../pages/about/about';
import { ChoicePlaylistPage } from '../pages/choiceplaylist/choiceplaylist';
import { PlaylistPage } from '../pages/playlist/playlist';
import { LastAddPage } from '../pages/lastadd/lastadd';
import { NewPlaylistPage } from '../pages/newplaylist/newplaylist';
import { SearchPlaylistPage } from '../pages/searchplaylist/searchplaylist';
import { SearchYoutubePage } from '../pages/searchyoutube/searchyoutube';
import { TabPlaylist } from '../pages/tabplaylist/tabplaylist';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      this.initializeApp();

      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Choisir Playlist', component: ChoicePlaylistPage },
        { title: 'Nouvelle Playlist', component: NewPlaylistPage },
        { title: 'Playlist', component: PlaylistPage },
        { title: 'Recherche youtube', component: SearchYoutubePage },
        { title: 'Recherche playlist à proximité', component: SearchPlaylistPage },
        { title: 'Dernier Ajout', component: LastAddPage },
        { title: 'Playlist Tab', component: TabPlaylist },
        { title: 'A propos', component:  AboutPage},
      ];

    }

    initializeApp() {
      this.platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
      // Reset the content nav to have just this page
      // we wouldn't want the back button to show in this scenario
      //this.nav.setRoot(page.component);
    }

}
