import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWarningModalComponent } from './game-warning-modal.component';

describe('GameWarningModalComponent', () => {
  let component: GameWarningModalComponent;
  let fixture: ComponentFixture<GameWarningModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameWarningModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWarningModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
