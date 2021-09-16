import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsSurveyComponent } from './user-details-survey.component';

describe('UserDetailsSurveyComponent', () => {
  let component: UserDetailsSurveyComponent;
  let fixture: ComponentFixture<UserDetailsSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
