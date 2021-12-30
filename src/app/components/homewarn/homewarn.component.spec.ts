import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewarnComponent } from './homewarn.component';

describe('HomewarnComponent', () => {
  let component: HomewarnComponent;
  let fixture: ComponentFixture<HomewarnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomewarnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewarnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
