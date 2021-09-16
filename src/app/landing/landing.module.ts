import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingUserDetailsComponent } from './landing-user-details/landing-user-details.component';
import { LandingSurveyListComponent } from './landing-survey-list/landing-survey-list.component';



@NgModule({
  declarations: [
    LandingComponent,
    LandingUserDetailsComponent,
    LandingSurveyListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LandingModule { }
