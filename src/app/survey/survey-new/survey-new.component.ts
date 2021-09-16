import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnswerType, Question, Survey } from 'src/app/core/models/survey.model';
import { SurveyService } from 'src/app/core/services/survey.service';

@Component({
  selector: 'app-survey-new',
  templateUrl: './survey-new.component.html',
  styleUrls: ['./survey-new.component.less']
})
export class SurveyNewComponent implements OnInit {

  survey: FormGroup = this.fb.group( {
    title: [''],
    questions: this.fb.array([
      this.fb.group({
        query: [''],
        answers: this.fb.array([
          this.fb.control('')
        ])
      })
    ])
  })

  constructor(private fb: FormBuilder, private router: Router, private surveyService: SurveyService) { }

  ngOnInit(): void {
  }

  log() {
    console.log(this.survey.value)
  }

  get questions() {
    return this.survey.get('questions') as FormArray
  }

  addNewQuestion(): void {
    (this.survey.get('questions') as FormArray).push(this.fb.group({
      query: [''],
      answers: this.fb.array([
        this.fb.control('')
      ])
    }))
  }

  getAnswerControls(questionIDX: number) {
    return (this.survey.get(['questions',questionIDX, 'answers']) as FormArray).controls;
  }

  addNewAnswer(questionIDX: number): void {
    const answers : FormArray = this.survey.get(['questions',questionIDX, 'answers']) as FormArray;
    console.log()
    answers.push(this.fb.control(''))
  }

  abandonSurvey() {
    this.router.navigate(['/']);
  }

  saveSurvey(): void {
    console.log(this.survey.value);
    this.surveyService.saveSurvey(this.survey.value);
    this.router.navigate(['/']);
  }

}
