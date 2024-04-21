import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DWatchlistComponent } from './d-watchlist.component';

describe('DWatchlistComponent', () => {
  let component: DWatchlistComponent;
  let fixture: ComponentFixture<DWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DWatchlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
