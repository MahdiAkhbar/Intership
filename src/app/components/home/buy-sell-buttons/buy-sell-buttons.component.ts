import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from '../../bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-buy-sell-buttons',
  templateUrl: './buy-sell-buttons.component.html',
  styleUrl: './buy-sell-buttons.component.css'
})
export class BuySellButtonsComponent {
  constructor(private _bottomSheet: MatBottomSheet,) { }

  openBottomSheet() {
    this._bottomSheet.open(BottomSheetComponent);
  }

}
