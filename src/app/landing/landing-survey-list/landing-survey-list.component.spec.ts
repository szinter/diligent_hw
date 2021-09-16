import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingSurveyListComponent } from './landing-survey-list.component';

describe('LandingSurveyListComponent', () => {
  let component: LandingSurveyListComponent;
  let fixture: ComponentFixture<LandingSurveyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingSurveyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingSurveyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
