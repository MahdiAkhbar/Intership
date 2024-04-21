import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPortfoyComponent } from './d-portfoy.component';

describe('DPortfoyComponent', () => {
  let component: DPortfoyComponent;
  let fixture: ComponentFixture<DPortfoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DPortfoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DPortfoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
