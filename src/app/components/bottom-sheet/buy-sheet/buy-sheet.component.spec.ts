import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySheetComponent } from './buy-sheet.component';

describe('BuySheetComponent', () => {
  let component: BuySheetComponent;
  let fixture: ComponentFixture<BuySheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuySheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
