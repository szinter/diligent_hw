import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';
import { SurveyNewComponent } from './survey/survey-new/survey-new.component';

const routes: Routes = [
  {path: 'surveys/new', component: SurveyNewComponent},
  {path: 'surveys/:id', component: SurveyDetailsComponent},
  {path: '', component: LandingComponent},
  {path: '**', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
