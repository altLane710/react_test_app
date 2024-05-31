export enum QuestionType {
  Radio,
  Multiple,
  ShortAnswer,
  LongAnswer,
}

export interface IRadioQuestion {
  type: QuestionType;
  description: string;
  options: { name: string; value: string }[];
  value: string;
}

export interface IMultipleQuestion {
  type: QuestionType;
  description: string;
  options: { name: string; checked: boolean }[];
  value: string[];
}

export interface IShortAnswer {
  type: QuestionType;
  description: string;
  value: string;
}

export interface ILongAnswer {
  type: QuestionType;
  description: string;
  value: string;
}

export type QuestionTypes =
  | IRadioQuestion
  | IMultipleQuestion
  | IShortAnswer
  | ILongAnswer;

export interface ITest {
  questions: QuestionTypes[];
  timeStart: Date | null;
  testDuration: number;
  currentStep: number;
  beginTest: Function;
  endTest: Function;
  nextStep: Function;
  resetTest: Function;
  saveAnswer: (value: any) => void;
}

export function isRadioQuestion(q: QuestionTypes): q is IRadioQuestion {
  return (q as IRadioQuestion).type === QuestionType.Radio;
}

export function isMultipleQuestion(q: QuestionTypes): q is IMultipleQuestion {
  return (q as IMultipleQuestion).type === QuestionType.Multiple;
}

export function isShortAnswer(q: QuestionTypes): q is IShortAnswer {
  return (q as IShortAnswer).type === QuestionType.ShortAnswer;
}

export function isLongAnswer(q: QuestionTypes): q is ILongAnswer {
  return (q as ILongAnswer).type === QuestionType.LongAnswer;
}
