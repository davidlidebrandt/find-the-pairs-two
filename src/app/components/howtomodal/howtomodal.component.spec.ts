import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtomodalComponent } from './howtomodal.component';

describe('HowtomodalComponent', () => {
  let component: HowtomodalComponent;
  let fixture: ComponentFixture<HowtomodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowtomodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowtomodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
