import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestartwarnComponent } from './restartwarn.component';

describe('RestartwarnComponent', () => {
  let component: RestartwarnComponent;
  let fixture: ComponentFixture<RestartwarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestartwarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestartwarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
