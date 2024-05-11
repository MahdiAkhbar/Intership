import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ISearch } from '../interfaces/search.interface';
import { IStock } from '../interfaces/stock-info.interface';
import { take, tap } from 'rxjs';
import { ILastTrade } from '../interfaces/stock-last-trade.interface';
import { IMazanneh } from '../interfaces/mazanneh';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(
    private http: HttpClient,
    private userService: UserService,
    @Inject('API_URL') private apiUrl: string
  ) { }

  search(arg: string) {
    return this.http.get<ISearch[]>(this.apiUrl + '/tse/search/' + arg);
  }

  setInsCode(ins: string) {
    localStorage.setItem('ins-code', ins);
  }

  getInsCode() {
    let ins = localStorage.getItem('ins-code');
    if (ins)
      return ins;
    else {
      let user = this.userService.getUser();
      if (user) {
        let ins = user.favorites[0].insCode;
        return ins;
      }
    }
    return '48990026850202503';
  }

  getStockInfo(ins: string) {
    return this.http.get<IStock>(this.apiUrl + '/tse/stock_info/' + ins).pipe(
      take(1)
    );
  }

  getLastTrade(ins: string) {
    return this.http.get<ILastTrade>(this.apiUrl + '/tse/stock_last_trade/' + ins).pipe(
      take(1)
    );
  }

  getStockMazanneh(ins: string) {
    return this.http.get<IMazanneh>(this.apiUrl + '/tse/stock_limits/' + ins);
  }

}
