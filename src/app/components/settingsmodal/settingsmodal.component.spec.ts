import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsmodalComponent } from './settingsmodal.component';

describe('SettingsmodalComponent', () => {
  let component: SettingsmodalComponent;
  let fixture: ComponentFixture<SettingsmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
