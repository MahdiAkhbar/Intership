import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DNavbarComponent } from './d-navbar.component';

describe('DNavbarComponent', () => {
  let component: DNavbarComponent;
  let fixture: ComponentFixture<DNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
