import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { youTubeServiceInjectables } from '../pages/searchyoutube/searchyoutube';
import { SearchResultComponent } from '../pages/searchyoutube/searchyoutube';
import { SearchBox } from '../pages/searchyoutube/searchyoutube';
//import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';

import { ChoicePlaylistPage } from '../pages/choiceplaylist/choiceplaylist';
import { NewPlaylistPage } from '../pages/newplaylist/newplaylist';


import { SearchPlaylistPage } from '../pages/searchplaylist/searchplaylist';
//import { YoutubePage} from '../pages/youtube/youtube';
import { TabPlaylist } from '../pages/tabplaylist/tabplaylist';
import { LastAddPage } from '../pages/lastadd/lastadd';
import { PlaylistPage } from '../pages/playlist/playlist';
import { SearchYoutubePage } from '../pages/searchyoutube/searchyoutube';

import { ApiLastPlaylist } from '../providers/api-last-playlist';
import { ApiOldPlaylist } from '../providers/api-old-playlist';
import { ApiPlaylist } from '../providers/api-playlist';
import { ApiLastAddMusic } from '../providers/api-last-add-music';
//import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
//import { Youtube } from '../providers/youtube-service';
import { Geolocation } from '@ionic-native/geolocation';


import { YoutubePlayerModule } from 'ng2-youtube-player';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PlaylistPage,
  //  YoutubePage,
    ChoicePlaylistPage,
    LastAddPage,
    NewPlaylistPage,
    SearchYoutubePage,
    SearchPlaylistPage,
    TabPlaylist,
    SearchResultComponent,
    SearchBox
  ],
  imports: [
    BrowserModule,
    YoutubePlayerModule,
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
    TabPlaylist,
  //  YoutubePage,
    SearchResultComponent,
    SearchBox
  ],
  providers: [
    //Youtube,
    Geolocation,
    ApiLastAddMusic,
    ApiOldPlaylist,
    ApiLastPlaylist,
    ApiPlaylist,
    youTubeServiceInjectables,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  exports: [
   SearchYoutubePage
 ]
})
export class AppModule {}
platformBrowserDynamic().bootstrapModule(AppModule);
