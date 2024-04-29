import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { OrderService } from '../../../../shared/services/order.service';

@Component({
  selector: 'app-d-exchange',
  templateUrl: './d-exchange.component.html',
  styleUrl: './d-exchange.component.css'
})
export class DExchangeComponent {
  constructor(private _bottomSheet: MatBottomSheet, private orderService: OrderService) { }

  orderType: string = 'buy';

  ngOnInit(): void {
  }

  formType(val: string) {
    this.orderType = val;
  }

  closeBottomSheet() {
    this._bottomSheet.dismiss();
  }

}
