import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DExchangeComponent } from './d-exchange.component';

describe('DExchangeComponent', () => {
  let component: DExchangeComponent;
  let fixture: ComponentFixture<DExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DExchangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
