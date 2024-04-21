import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DMazannehComponent } from './d-mazanneh.component';

describe('DMazannehComponent', () => {
  let component: DMazannehComponent;
  let fixture: ComponentFixture<DMazannehComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DMazannehComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DMazannehComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
