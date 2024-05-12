import { Component, OnInit } from '@angular/core';
import { StockService } from '../../shared/services/stock.service';

@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.css'
})
export class DesktopComponent implements OnInit {
  constructor(
    private stockService: StockService
  ) { }

  ngOnInit(): void {
    let ins = this.stockService.getInsCode();
    this.stockService.insCode.next(ins);
  }

}
