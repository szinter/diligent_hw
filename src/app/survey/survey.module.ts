import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyLandingComponent } from './survey-landing/survey-landing.component';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import { SurveyListComponent } from './survey-list/survey-list.component';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [
    SurveyLandingComponent,
    SurveyNewComponent,
    SurveyDetailsComponent,
    SurveyListComponent
  ],
  imports: [
    CommonModule,
    UserModule
  ]
})
export class SurveyModule { }
