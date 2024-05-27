import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-d-exchange',
  templateUrl: './d-exchange.component.html',
  styleUrl: './d-exchange.component.css'
})
export class DExchangeComponent {
  constructor() { }

  isBuyMode: boolean = true;

  tradeForm!: FormGroup;

  ngOnInit(): void {
    this.tradeForm = new FormGroup({
      price: new FormControl(null),
      count: new FormControl(null),
      totalPrice: new FormControl(null)
    })
  }

  formType(val: boolean) {
    this.isBuyMode = val;
  }

  increasePrice() {
    if (!this.tradeForm.controls['price'])
      this.tradeForm.patchValue({
        price: 100
      });
    else
      this.tradeForm.patchValue({
        price: this.tradeForm.get('price')?.value + 100
      });
  }

  decreadePrice() {
    if (!this.tradeForm.get('price')?.value)
      return;
    else if (this.tradeForm.get('price')?.value < 100)
      this.tradeForm.patchValue({
        price: 0
      });
    else
      this.tradeForm.patchValue({
        price: this.tradeForm.get('price')?.value - 100
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
  }

}
