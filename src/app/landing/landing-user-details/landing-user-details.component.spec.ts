import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUserDetailsComponent } from './landing-user-details.component';

describe('LandingUserDetailsComponent', () => {
  let component: LandingUserDetailsComponent;
  let fixture: ComponentFixture<LandingUserDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingUserDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
