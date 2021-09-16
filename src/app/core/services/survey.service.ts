import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Survey } from '../models/survey.model';
import SurveysMock from '../mocks/surveys1.mock.json';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private surveys: Survey[] = SurveysMock;
  private surveysMessenger: BehaviorSubject<Survey[]> = new BehaviorSubject(this.surveys);

  constructor() { }

  getAllSurveys(): Observable<Survey[]> {
    return this.surveysMessenger.asObservable();
  }

  getSurveyById(id: string): Observable<Survey> {
    const [survey] = this.surveys.filter(survey => {
      return survey.id === id;
    });

    return of(
      survey
    )
  }

  saveSurvey(survey: Survey) {
    survey.id = Math.floor(Math.random() * 100) + '';
    this.surveys.push(survey);
    this.surveysMessenger.next(this.surveys);
  }
}
