import { QuestionTypes } from "./types";
import mockQuestions from "./mockQuestions";

export enum AppActionTypes {
  BEGIN_TEST = "BEGIN_TEST",
  END_TEST = "END_TEST",
  NEXT_STEP = "NEXT_STEP",
  RESET_TEST = "RESET_TEST",
  SAVE_ANSWER = "SAVE_ANSWER",
}

export interface IAppState {
  timeStart: Date | null;
  testDuration: number;
  currentStep: number;
  questions: QuestionTypes[];
}

export interface IAppAction {
  type: AppActionTypes;
  payload?: any;
}

export const initialState: IAppState = {
  currentStep: 0,
  timeStart: null,
  testDuration: 600,
  questions: mockQuestions,
};

export function appReducer(state: IAppState, action: IAppAction): IAppState {
  const { type, payload } = action;

  switch (type) {
    case AppActionTypes.BEGIN_TEST:
      return {
        ...state,
        currentStep: 1,
        timeStart: new Date(),
      };
    case AppActionTypes.END_TEST:
      return {
        ...state,
        currentStep: state.questions.length + 1,
        timeStart: new Date(),
      };
    case AppActionTypes.NEXT_STEP:
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case AppActionTypes.RESET_TEST:
      return {
        ...state,
        currentStep: 1,
        timeStart: new Date(),
        questions: mockQuestions,
      };
    case AppActionTypes.SAVE_ANSWER:
      return {
        ...state,
        questions: state.questions.map((e, i) =>
          i === state.currentStep - 1 ? { ...e, value: payload } : e
        ),
      };
    default:
      return state;
  }
}
