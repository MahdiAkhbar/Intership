import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { IWatchlist } from '../interfaces/watchList';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {

  constructor(
    private http: HttpClient,
    @Inject('API_URL') private apiUrl: string
  ) { }

  username!: string;

  watchList: Subject<IWatchlist> = new Subject();

  getWatchList(username: string) {
    this.username = username;
    return this.http.get<IWatchlist[]>(this.apiUrl + '/favorite/' + username);
  }

  addToWatchList(item: IWatchlist) {
    let data = {
      username: this.username,
      insCode: item.insCode
    };
    return this.http.post(this.apiUrl + '/favorite/add_to_user', data);
  }
}
