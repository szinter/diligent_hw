import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Survey } from '../models/survey.model';
import SurveysMock from '../mocks/surveys1.mock.json';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  surveys: Survey[] = SurveysMock;

  constructor() { }

  getAllSurveys(): Observable<Survey[]> {
    return of(
      this.surveys
    )
  }

  getSurveyById(id: string): Observable<Survey> {
    const [survey] = this.surveys.filter(survey => {
      return survey.id === id;
    });

    return of(
      survey
    )
  }
}
