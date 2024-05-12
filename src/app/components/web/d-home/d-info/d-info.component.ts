import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { concatMap, filter, fromEvent, map, tap } from 'rxjs';
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
  selectedStock!: IStock;

  stockLastTrade!: ILastTrade;
  lastTradeDate!: Date;
  @ViewChild('search', { static: true }) search!: ElementRef;

  ngOnInit(): void {
    this.stockService.insCode.subscribe(ins => {
      this.stockService.getLastTrade(ins).subscribe(res => {
        this.stockLastTrade = res;
      });

      this.stockService.getStockInfo(ins).subscribe(res => {
        this.selectedStock = res;
        this.r2.setProperty(this.search.nativeElement, 'value', res.symbol);
      });
    })

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
    this.stockService.insCode.next(val.insCode);
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

  onAddToWatchList() {
    this.watchListService.addToWatchList(this.selectedStock).subscribe()
    this.watchListService.addWatchList.next(this.selectedStock);
  }

}
