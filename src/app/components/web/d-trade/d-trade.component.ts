import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Subject } from 'rxjs';
import { StockService } from '../../../shared/services/stock.service';

@Component({
  selector: 'app-d-trade',
  templateUrl: './d-trade.component.html',
  styleUrl: './d-trade.component.css'
})
export class DTradeComponent implements OnInit {

  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    fromEvent(window, 'keyup').pipe(
      map(event => event as KeyboardEvent)
    ).subscribe(res => {
      if (res.key === '/')
        this.stockService.searchFocus.next(true);
    })
  }

}
