import { createContext, useContext, useEffect, useReducer } from "react";
import { AppActionTypes, appReducer, initialState } from "./state";
import { ITest } from "./types";

const localStorageKey = "AppState";

const TestContext = createContext<ITest>({
  ...initialState,
  beginTest: () => {},
  endTest: () => {},
  nextStep: () => {},
  resetTest: () => {},
  saveAnswer: () => {},
});

function TestProvider(props: { children: any }) {
  const [state, dispatch] = useReducer(appReducer, initialState, (initial) => {
    const storedState = localStorage.getItem(localStorageKey);
    return storedState === null ? initial : JSON.parse(storedState);
  });

  const contextValue: ITest = {
    ...state,
    beginTest: () => dispatch({ type: AppActionTypes.BEGIN_TEST }),
    endTest: () => dispatch({ type: AppActionTypes.END_TEST }),
    nextStep: () => dispatch({ type: AppActionTypes.NEXT_STEP }),
    resetTest: () => dispatch({ type: AppActionTypes.RESET_TEST }),
    saveAnswer: (value) =>
      dispatch({ type: AppActionTypes.SAVE_ANSWER, payload: value }),
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }, [state]);

  return (
    <TestContext.Provider value={contextValue}>
      {props.children}
    </TestContext.Provider>
  );
}

export function useTest(): ITest {
  return useContext<ITest>(TestContext);
}

export default TestProvider;
