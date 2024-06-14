export interface Answer {
    text: string;
    image: string;
  }
  
  export interface Question {
    number: number;
    question: string;
    answers: Answer[];
  }
  
  export interface QuizData {
    test: Question[];
  }
  