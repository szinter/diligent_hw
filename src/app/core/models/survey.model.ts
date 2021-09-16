export interface Survey {
    id: string;
    title: String;
    questions: Question[]
}

export interface Question {
    id: string;
    query: string;
    answers: String[];
    answerType: AnswerType
}

export enum AnswerType {
    MultipleChoice = "MULTIPLE-CHOICE",
    SingleSelect = "SINGLE-CHOICE"
}