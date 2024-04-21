import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DInfoComponent } from './d-info.component';

describe('DInfoComponent', () => {
  let component: DInfoComponent;
  let fixture: ComponentFixture<DInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
