import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrl: './bottom-sheet.component.css'
})
export class BottomSheetComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  orderType: string = 'buy';

  formType(val: string) {
    this.orderType = val;
  }

  closeBottomSheet() {
    this._bottomSheet.dismiss();
  }

}
