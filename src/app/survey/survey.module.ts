import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';


@NgModule({
  declarations: [
    SurveyNewComponent,
    SurveyDetailsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SurveyModule { }
