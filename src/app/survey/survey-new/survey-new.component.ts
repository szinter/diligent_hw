import { Component, OnInit } from '@angular/core';
import { AnswerType, Question, Survey } from 'src/app/core/models/survey.model';

@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.less']
})
export class SurveyNewComponent implements OnInit {

  survey: Survey = {
    title: '',
    questions: []
  }

  constructor() { }

  ngOnInit(): void {
  }

  addNewQuestion(): void {
    this.survey.questions.push(
      {
        query: '',
        answers: [],
        answerType: AnswerType.MultipleChoice
      }
    )
  }

  updateTitle($event: any) {
    console.log(event); 
  }

  addNewAnswer(question: Question): void {
    question.answers.push('');
  }

  saveSurvey(): void {
    
  }

}
