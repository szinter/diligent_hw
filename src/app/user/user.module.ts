import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsSurveyComponent } from './user-details-survey/user-details-survey.component';



@NgModule({
  declarations: [
    UserDetailsSurveyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDetailsSurveyComponent
  ]
})
export class UserModule { }
