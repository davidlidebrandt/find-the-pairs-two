import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestscoresmodalComponent } from './bestscoresmodal.component';

describe('BestscoresmodalComponent', () => {
  let component: BestscoresmodalComponent;
  let fixture: ComponentFixture<BestscoresmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestscoresmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestscoresmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
