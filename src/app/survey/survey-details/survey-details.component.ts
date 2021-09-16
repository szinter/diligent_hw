import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Survey } from 'src/app/core/models/survey.model';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-survey-details',
  templateUrl: './survey-details.component.html',
  styleUrls: ['./survey-details.component.less']
})
export class SurveyDetailsComponent implements OnInit {

  survey$: Observable<Survey> = new Observable<Survey>();

  constructor(private surveyService: SurveyService, private route: ActivatedRoute, private router: Router) {
    this.survey$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return this.surveyService.getSurveyById(params.get('id') + '')}
      )
    )
  }

  ngOnInit(): void {
    
  }

  goToLanding(): void {
    this.router.navigate(['']);
  }

}
