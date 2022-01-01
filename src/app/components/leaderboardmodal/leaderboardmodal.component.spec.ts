import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardmodalComponent } from './leaderboardmodal.component';

describe('LeaderboardmodalComponent', () => {
  let component: LeaderboardmodalComponent;
  let fixture: ComponentFixture<LeaderboardmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
