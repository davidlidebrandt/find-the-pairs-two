import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardwindowComponent } from './cardwindow.component';

describe('CardwindowComponent', () => {
  let component: CardwindowComponent;
  let fixture: ComponentFixture<CardwindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardwindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardwindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
