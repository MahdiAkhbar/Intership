import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StockService } from '../../../../shared/services/stock.service';
import { priceRangeValidator } from '../../../../shared/validators/priceRange.validator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-d-exchange',
  templateUrl: './d-exchange.component.html',
  styleUrl: './d-exchange.component.css'
})
export class DExchangeComponent {
  constructor(
    private stockService: StockService,
    private snackBar: MatSnackBar
  ) { }

  isBuyMode: boolean = true;

  tradeForm: FormGroup = new FormGroup({
    price: new FormControl(0),
    count: new FormControl(0),
    totalPrice: new FormControl(0)
  });
  priceRange!: { min: number, max: number };
  priceTooltipMessage!: string;
  submitIsLoading: boolean = false;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  ngOnInit(): void {
    this.stockService.stockLastTrade.subscribe(data => {
      this.priceRange = data;
      this.priceTooltipMessage = `قیمت سفارش نمیتواند خارج از محدوده ( ${data.max} - ${data.min} ) باشد`;

      this.tradeForm = new FormGroup({
        price: new FormControl(0, priceRangeValidator(this.priceRange.min, this.priceRange.max)),
        count: new FormControl(0),
        totalPrice: new FormControl(0)
      });
    });
  }

  formType(val: boolean) {
    this.isBuyMode = val;
  }

  onSubmit() {
    let f = this.tradeForm.controls;
    if (f['price'].valid && f['count'].value > 0) {
      this.submitIsLoading = true;
      setTimeout(() => {
        this.snackBar.open('سفارش باموفقیت ارسال شد', 'بستن', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 5000
        })
        this.tradeForm.setValue({
          price: 0,
          count: 0,
          totalPrice: 0
        });
        this.submitIsLoading = false;
      }, 3000);
    }
    else
      return;
  }


  increasePrice() {
    if (!this.tradeForm.get('price')?.value || this.tradeForm.get('price')?.value < this.priceRange.min)
      this.tradeForm.patchValue({
        price: this.priceRange.min
      });
    else if (this.tradeForm.get('price')?.value + 10 > this.priceRange.max)
      this.tradeForm.patchValue({
        price: this.priceRange.max
      });
    else
      this.tradeForm.patchValue({
        price: this.tradeForm.get('price')?.value + 10
      });

    this.tradeForm.patchValue({
      totalPrice: this.tradeForm.get('price')?.value * this.tradeForm.get('count')?.value
    });
  }

  decreadePrice() {
    if (!this.tradeForm.get('price')?.value)
      return;
    else if (this.tradeForm.get('price')?.value < this.priceRange.min + 10)
      this.tradeForm.patchValue({
        price: this.priceRange.min
      });
    else
      this.tradeForm.patchValue({
        price: this.tradeForm.get('price')?.value - 10
      });

    this.tradeForm.patchValue({
      totalPrice: this.tradeForm.get('price')?.value * this.tradeForm.get('count')?.value
    });
  }

  changecount(val: number) {
    if (val < 0) {
      if (!this.tradeForm.get('count')?.value)
        return;
      if (this.tradeForm.get('count')?.value <= Math.abs(val))
        this.tradeForm.patchValue({
          count: 0
        });
      else
        this.tradeForm.patchValue({
          count: this.tradeForm.get('count')?.value + val
        });
    }
    else {
      if (!this.tradeForm.get('count')?.value)
        this.tradeForm.patchValue({
          count: val
        });
      else
        this.tradeForm.patchValue({
          count: this.tradeForm.get('count')?.value + val
        });
    }

    this.tradeForm.patchValue({
      totalPrice: this.tradeForm.get('price')?.value * this.tradeForm.get('count')?.value
    });
  }

}
