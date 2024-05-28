import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { concatMap, distinctUntilChanged, filter, fromEvent, interval, map, mergeMap, startWith, switchMap, tap } from 'rxjs';
import { StockService } from '../../../../shared/services/stock.service';
import { ISearch } from '../../../../shared/interfaces/search.interface';
import { IStock } from '../../../../shared/interfaces/stock-info.interface';
import { ILastTrade } from '../../../../shared/interfaces/stock-last-trade.interface';
import { WatchListService } from '../../../../shared/services/watch-list.service';

@Component({
  selector: 'app-d-info',
  templateUrl: './d-info.component.html',
  styleUrl: './d-info.component.css'
})
export class DInfoComponent implements OnInit {
  constructor(
    private stockService: StockService,
    private r2: Renderer2,
    private watchListService: WatchListService
  ) { }

  searchResultList!: ISearch[];
  searchResultListVisiblity: boolean = false;
  isFocus: boolean = false;
  selectedStock: IStock = {
    insCode: '',
    symbol: '',
    companyName: '',
    symbolEn: '',
    companyNameEn: '',
    maxAllowedPrice: 0,
    minAllowedPrice: 0,
    baseVolume: 0,
    flow: 0,
    valid: 0,
    symbolType: 0,
    symbolAsset: 0,
    finalTradePrice: 0,
    firstPrice: 0,
    closePrice: 0,
    tradesCount: 0,
    tradesVolume: 0,
    tradesValue: 0
  };
  stockLastTrade: ILastTrade = {
    symbol: '',
    eventDate: 0,
    tradesCount: 2194,
    tradesVolume: 0,
    tradesValue: 0,
    insCode: '',
    company: '',
    closePrice: 0,
    finalTradePrice: 0,
    priceChange: 0,
    minPrice: 0,
    maxPrice: 0,
    firstPrice: 0,
    priceYesterday: 0,
    lastStatus: 0,
    eventClock: 0
  };

  @ViewChild('search', { static: true }) search!: ElementRef;

  ngOnInit(): void {
    this.stockService.searchFocus.subscribe(() => {
      this.search.nativeElement.focus();
    })
    this.stockService.insCode.pipe(
      distinctUntilChanged(),
      switchMap((ins) => interval(5 * 60 * 1000).pipe(
        startWith(0),
        mergeMap(() => this.stockService.getStockInfo(ins))
      ))
    ).subscribe(res => {
      this.selectedStock = res;
      this.r2.setProperty(this.search.nativeElement, 'value', res.symbol);
      this.search.nativeElement.focus();
    });

    this.stockService.insCode.pipe(
      distinctUntilChanged(),
      switchMap((ins) => interval(5 * 60 * 1000).pipe(
        startWith(0),
        mergeMap(() => this.stockService.getLastTrade(ins))
      ))
    ).subscribe(res => {
      this.stockLastTrade = res;
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
      this.isFocus = true;
    });

    this.r2.listen(this.search.nativeElement, 'focus', () => {
      this.isFocus = true;
    });
    this.r2.listen(this.search.nativeElement, 'focusout', () => {
      setTimeout(() => {
        this.isFocus = false;
      }, 200);
    });

  }

  onSelectSearchItem(val: ISearch) {
    this.stockService.insCode.next(val.insCode);
    this.stockService.setInsCode(val.insCode);
    this.searchResultListVisiblity = false;
    this.stockService.getStockInfo(val.insCode).subscribe(res => {
      this.selectedStock = res;
      this.r2.setProperty(this.search.nativeElement, 'value', val.symbol);
    });
  }

  onAddToWatchList() {
    this.watchListService.addToWatchList(this.selectedStock).subscribe()
    this.watchListService.addWatchList.next(this.selectedStock);
  }

}
