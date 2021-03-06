import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingUserDetailsComponent } from './landing-user-details/landing-user-details.component';
import { LandingSurveyListComponent } from './landing-survey-list/landing-survey-list.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    LandingComponent,
    LandingUserDetailsComponent,
    LandingSurveyListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
  ]
})
export class LandingModule { }
