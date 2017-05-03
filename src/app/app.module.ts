import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

//import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { ChoicePlaylistPage } from '../pages/choiceplaylist/choiceplaylist';
import { NewPlaylistPage } from '../pages/newplaylist/newplaylist';


import { SearchPlaylistPage } from '../pages/searchplaylist/searchplaylist';

import { TabPlaylist } from '../pages/tabplaylist/tabplaylist';
import { LastAddPage } from '../pages/lastadd/lastadd';
import { PlaylistPage } from '../pages/playlist/playlist';
import { SearchYoutubePage } from '../pages/searchyoutube/searchyoutube';

import { ApiLastPlaylist } from '../providers/api-last-playlist';
import { ApiOldPlaylist } from '../providers/api-old-playlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PlaylistPage,
    ChoicePlaylistPage,
    LastAddPage,
    NewPlaylistPage,
    SearchYoutubePage,
    SearchPlaylistPage,
    TabPlaylist
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
    tabsPlacement: 'bottom',
    backButtonIcon: 'ion-arrow-left-c',
      })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PlaylistPage,
    ChoicePlaylistPage,
    LastAddPage,
    NewPlaylistPage,
    SearchYoutubePage,
    SearchPlaylistPage,
    TabPlaylist
  ],
  providers: [
    ApiOldPlaylist,
    ApiLastPlaylist,

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
