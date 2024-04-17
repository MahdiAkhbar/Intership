import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSignupComponent } from './d-signup.component';

describe('DSignupComponent', () => {
  let component: DSignupComponent;
  let fixture: ComponentFixture<DSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
