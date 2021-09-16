import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyNewComponent } from './survey-new.component';

describe('SurveyNewComponent', () => {
  let component: SurveyNewComponent;
  let fixture: ComponentFixture<SurveyNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
