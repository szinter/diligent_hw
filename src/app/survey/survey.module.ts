import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import {
  MatInputModule
} from '@angular/material/input'


@NgModule({
  declarations: [
    SurveyNewComponent,
    SurveyDetailsComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule

  ]
})
export class SurveyModule { }
