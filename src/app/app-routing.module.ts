import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component';
import { SurveyDetailsComponent } from './survey/survey-details/survey-details.component';

const routes: Routes = [
  {path: 'surveys/:id', component: SurveyDetailsComponent},
  {path: '', component: LandingComponent},
  {path: '**', component: LandingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
