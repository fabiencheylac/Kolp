import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {
 Injectable,
 OnInit,
 ElementRef,
 EventEmitter,
 Inject
} from '@angular/core';
import {TabPlaylist} from '../tabplaylist/tabplaylist';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
export var YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export var YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
class SearchResult {
 id: string;
 title: string;
 description: string;
 thumbnailUrl: string;
 videoUrl: string;
 constructor(obj?: any) {
   this.id              = obj && obj.id             || null;
   this.title           = obj && obj.title          || null;
   this.description     = obj && obj.description    || null;
   this.thumbnailUrl    = obj && obj.thumbnailUrl   || null;
   this.videoUrl        = obj && obj.videoUrl       ||
                           `https://www.youtube.com/watch?v=${this.id}`;
 }
}
@Injectable()
export class YouTubeService {
 constructor(public http: Http,
             @Inject(YOUTUBE_API_KEY) private apiKey: string,
             @Inject(YOUTUBE_API_URL) private apiUrl: string) {
 }
 search(query: string): Observable<SearchResult[]> {
   let params: string = [
     `q=${query}`,
     `key=${this.apiKey}`,
     `part=snippet`,
     `type=video`,
     `maxResults=10`
   ].join('&');
   let queryUrl: string = `${this.apiUrl}?${params}`;
   return this.http.get(queryUrl)
     .map((response: Response) => {
       return (<any>response.json()).items.map(item => {
         return new SearchResult({
           id: item.id.videoId,
           title: item.snippet.title,
           description: item.snippet.description,
           thumbnailUrl: item.snippet.thumbnails.high.url
         });
       });
     });
 }
}
export var youTubeServiceInjectables: Array<any> = [
 {provide: YouTubeService, useClass: YouTubeService},
 {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
 {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];
@Component({
 outputs: ['loading', 'results'],
 selector: 'search-box',
 template: `
   <p>recherchez votre sur Youtube</p>
   <input type="text" class="form-control" placeholder="Search" autofocus>
 `
})
export class SearchBox implements OnInit {
 loading: EventEmitter<boolean> = new EventEmitter<boolean>();
 results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();
 constructor(public searchyoutube: YouTubeService,
            private el: ElementRef) {
 }
 ngOnInit(): void {
   Observable.fromEvent(this.el.nativeElement, 'keyup')
     .map((e: any) => e.target.value)
     .filter((text: string) => text.length > 1)
     .debounceTime(250)
     .do(() => this.loading.next(true))
     .map((query: string) => this.searchyoutube.search(query))
     .switch()
     .subscribe(
       (results: SearchResult[]) => {
         this.loading.next(false);
         this.results.next(results);
       },
       (err: any) => {
         console.log(err);
         this.loading.next(false);
       },
       () => {
         this.loading.next(false);
       }
     );
 }
}
@Component({
 inputs: ['result'],
 selector: 'search-result',
 template: `
  <div class="col-sm-6 col-md-3">
     <div class="thumbnail">
       <img src="{{result.thumbnailUrl}}">
       <span class="caption">
         <h4>{{result.title}}</h4>

         <p><button (click)="addsing(result.videoUrl)"
            role="button">+</button></p>
       </span>
     </div>
   </div>
 `
})
export class SearchResultComponent {
 result: SearchResult;
}
@Component({
 selector: 'page-searchyoutube',
 templateUrl: 'searchyoutube.html'
})
export class SearchYoutubePage {
 constructor(public navCtrl: NavController, public navParams: NavParams) {}
 ionViewDidLoad() {
   console.log('ionViewDidLoad SearchYoutubePage');
 }
  results: SearchResult[];
 updateResults(results: SearchResult[]): void {
   this.results = results;
 }
 addsing(url){
     this.navCtrl.push(TabPlaylist,url);
   }

}
