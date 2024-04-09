import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellSheetComponent } from './sell-sheet.component';

describe('SellSheetComponent', () => {
  let component: SellSheetComponent;
  let fixture: ComponentFixture<SellSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
