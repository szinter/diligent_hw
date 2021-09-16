import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyLandingComponent } from './survey/survey-landing/survey-landing.component';

const routes: Routes = [
  {path: '', component: SurveyLandingComponent},
  {path: '**', component: SurveyLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
