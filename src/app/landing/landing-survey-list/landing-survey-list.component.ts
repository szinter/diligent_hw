import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from 'src/app/core/models/survey.model';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-landing-survey-list',
  templateUrl: './landing-survey-list.component.html',
  styleUrls: ['./landing-survey-list.component.less']
})
export class LandingSurveyListComponent implements OnInit {

  surveys$: Observable<Survey[]>;

  constructor(private surveyService: SurveyService) { 
    this.surveys$ = this.surveyService.getAllSurveys();
  }

  ngOnInit(): void {
  }

}
