import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BuySellButtonsComponent } from '../home/buy-sell-buttons/buy-sell-buttons.component';
import { BuySheetComponent } from './buy-sheet/buy-sheet.component';
import { SellSheetComponent } from './sell-sheet/sell-sheet.component';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css'
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }
  // goToOther(val: string) {
  //   this._bottomSheet.dismiss();
  //   if (val === '1')
  //     this._bottomSheet.open(BuySheetComponent);
  //   if (val === '2')
  //     this._bottomSheet.open(SellSheetComponent);
  // }

  orderType: string = 'buy';

  formType(val: string) {
    this.orderType = val;
  }

  closeBottomSheet() {
    this._bottomSheet.dismiss();
  }

}
