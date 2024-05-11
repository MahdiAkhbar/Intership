import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { concatMap, filter, fromEvent, map, tap } from 'rxjs';
import { StockService } from '../../../../shared/services/stock.service';
import { ISearch } from '../../../../shared/interfaces/search.interface';
import { IStock } from '../../../../shared/interfaces/stock-info.interface';
import { ILastTrade } from '../../../../shared/interfaces/stock-last-trade.interface';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-d-info',
  templateUrl: './d-info.component.html',
  styleUrl: './d-info.component.css'
})
export class DInfoComponent implements OnInit {
  constructor(
    private stockService: StockService,
    private r2: Renderer2,
    private userService: UserService
  ) { }

  searchResultList!: ISearch[];
  searchResultListVisiblity: boolean = false;
  selectedStock!: IStock;

  stockLastTrade!: ILastTrade;
  lastTradeDate!: Date;
  @ViewChild('search', { static: true }) search!: ElementRef;

  ngOnInit(): void {
    let ins = this.stockService.getInsCode();
    if (ins) {
      this.stockService.getLastTrade(ins).subscribe(res => {
        this.stockLastTrade = res;
      })
    }
    else {
      let user = this.userService.getUser();
      if (user) {
        let ins = user.favorites[0].insCode;
        this.stockService.getStockInfo(ins).subscribe(res => {
          this.selectedStock = res;
          this.r2.setProperty(this.search.nativeElement, 'value', res.symbol);
        });
        this.stockService.getLastTrade(ins).subscribe(res => {
          this.stockLastTrade = res;
        });
      }
      else {
        this.stockService.getStockInfo('48990026850202503').subscribe(res => {
          this.selectedStock = res;
          this.r2.setProperty(this.search.nativeElement, 'value', res.symbol);
        }
        );
        this.stockService.getLastTrade(ins).subscribe(res => {
          this.stockLastTrade = res;
        });
      }
    }
    this.stockService.getStockInfo(ins).subscribe(res => {
      this.selectedStock = res;
      this.r2.setProperty(this.search.nativeElement, 'value', res.symbol);
    });
    fromEvent(this.search.nativeElement, 'input').pipe(
      map(event => event as InputEvent),
      map(input => (<HTMLInputElement>input.target).value),
      tap(i => {
        if (i.length < 1) {
          this.searchResultList = [];
          this.searchResultListVisiblity = false;
        }
      }),
      filter(input => input.length > 1),
      concatMap(input => this.stockService.search(input))
    ).subscribe(res => {
      this.searchResultList = res;
      this.searchResultListVisiblity = true;
    })
  }

  onSelectSearchItem(val: ISearch) {
    this.stockService.setInsCode(val.insCode);
    this.searchResultListVisiblity = false;
    this.stockService.getStockInfo(val.insCode).subscribe(res => {
      this.selectedStock = res;
      this.r2.setProperty(this.search.nativeElement, 'value', val.symbol);
    });
    this.stockService.getLastTrade(val.insCode).subscribe(res => {
      this.stockLastTrade = res;
      this.lastTradeDate = new Date(res.eventDate);
    })
  }

}
