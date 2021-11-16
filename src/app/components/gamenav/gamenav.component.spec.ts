import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamenavComponent } from './gamenav.component';

describe('GamenavComponent', () => {
  let component: GamenavComponent;
  let fixture: ComponentFixture<GamenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
