import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DTradeComponent } from './d-trade.component';

describe('DTradeComponent', () => {
  let component: DTradeComponent;
  let fixture: ComponentFixture<DTradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DTradeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DTradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
