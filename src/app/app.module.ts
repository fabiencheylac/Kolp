import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { ChoicePlaylistPage } from '../pages/choiceplaylist/choiceplaylist';
import { LastAddPage } from '../pages/lastadd/lastadd';
import { NewPlaylistPage } from '../pages/newplaylist/newplaylist';
import { SearchPlaylistPage } from '../pages/searchplaylist/searchplaylist';
import { SearchYoutubePage } from '../pages/searchyoutube/searchyoutube';
import { TabPlaylist } from '../pages/tabplaylist/tabplaylist';

import { ApiLastPlaylist } from '../providers/api-last-playlist';
import { ApiOldPlaylist } from '../providers/api-old-playlist';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    ChoicePlaylistPage,
    LastAddPage,
    NewPlaylistPage,
    SearchYoutubePage,
    SearchPlaylistPage,
    TabPlaylist
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
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
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
