import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GriffinStatusComponent } from './griffin-status.component';

describe('GriffinStatusComponent', () => {
  let component: GriffinStatusComponent;
  let fixture: ComponentFixture<GriffinStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GriffinStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GriffinStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
