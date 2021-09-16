import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.less']
})
export class SurveyDetailsComponent implements OnInit {

  constructor(private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

}
