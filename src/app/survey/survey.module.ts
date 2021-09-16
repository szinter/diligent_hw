import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyNewComponent } from './survey-new/survey-new.component';
import { SurveyDetailsComponent } from './survey-details/survey-details.component';
import {
  MatInputModule
} from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    SurveyNewComponent,
    SurveyDetailsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
  ]
})
export class SurveyModule { }
