import { createContext, useContext, useReducer } from "react";
import { DefaultProps } from "../../ts/type";

type QuizStatus = {
  isShowChoosenSurah: boolean;
  isShowNumberOfQuestions: boolean;
  isQuizStart: boolean;
  isQuizEnd: boolean;
  isCorrect: boolean;
  isDisabled: boolean;
  isOptionClicked: boolean;
  isOptionsClicked: boolean[];
};

type QuizStatusActionReducer =
  | {
      type: "changed_isCorrect";
      isCorrect: boolean;
    }
  | {
      type: "changed_isOptionsClicked";
      isOptionsClicked: boolean[];
    }
  | { type: "toggle_isQuizStart" }
  | { type: "toggle_isQuizEnd" }
  | { type: "toggle_isShowChooseSurah" }
  | { type: "toggle_isShowNumberOfQuestions" }
  | { type: "toggle_isDisabled" }
  | { type: "toggle_isOptionClicked" }
  | Record<string, never>
  | { type: "" };

const initialQuizStatus: QuizStatus = {
  isShowChoosenSurah: false,
  isShowNumberOfQuestions: false,
  isQuizStart: false,
  isQuizEnd: false,
  isCorrect: false,
  isDisabled: false,
  isOptionClicked: false,
  isOptionsClicked: [false, false, false, false],
};

type QuizStatusAction =
  | {
      changeIsOptionsClicked: (isOptionsClicked: boolean[]) => void;
      changeIsCorrect: (isCorrect: boolean) => void;
      toggleIsShowChooseSurah: () => void;
      toggleIsShowNumberOfQuestions: () => void;
      toggleIsQuizStart: () => void;
      toggleIsQuizEnd: () => void;
      toggleIsDisabled: () => void;
      toggleIsOptionClicked: () => void;
      resetIsOptionsClicked: () => void;
    }
  | Record<string, never>;

const QuizStatusContext = createContext<QuizStatus>(initialQuizStatus);
const QuizStatusActionContext = createContext<QuizStatusAction>({});

export function useQuizStatusContext() {
  return useContext(QuizStatusContext);
}
export function useQuizStatusActionContext() {
  return useContext(QuizStatusActionContext);
}

export function QuizStatusProvider({ children }: DefaultProps) {
  const [quizStatus, dispatch] = useReducer(
    quizStatusReducer,
    initialQuizStatus
  );

  const changeIsOptionsClicked = (newIsOptionsClicked: boolean[]) => {
    dispatch({
      type: "changed_isOptionsClicked",
      isOptionsClicked: newIsOptionsClicked,
    });
  };

  const changeIsCorrect = (newIsCorrect: boolean) => {
    dispatch({
      type: "changed_isCorrect",
      isCorrect: newIsCorrect,
    });
  };

  const toggleIsShowChooseSurah = () => {
    dispatch({
      type: "toggle_isShowChooseSurah",
    });
  };

  const toggleIsShowNumberOfQuestions = () => {
    dispatch({
      type: "toggle_isShowNumberOfQuestions",
    });
  };

  const toggleIsQuizStart = () => {
    dispatch({
      type: "toggle_isQuizStart",
    });
  };

  const toggleIsQuizEnd = () => {
    dispatch({
      type: "toggle_isQuizEnd",
    });
  };

  const toggleIsDisabled = () => {
    dispatch({
      type: "toggle_isDisabled",
    });
  };

  const toggleIsOptionClicked = () => {
    dispatch({
      type: "toggle_isOptionClicked",
    });
  };

  const resetIsOptionsClicked = () => {
    dispatch({
      type: "changed_isOptionsClicked",
      isOptionsClicked: [false, false, false, false],
    });
  };

  const quizStatusAction = {
    changeIsOptionsClicked,
    changeIsCorrect,
    toggleIsShowChooseSurah,
    toggleIsShowNumberOfQuestions,
    toggleIsQuizStart,
    toggleIsQuizEnd,
    toggleIsDisabled,
    toggleIsOptionClicked,
    resetIsOptionsClicked,
  };
  return (
    <QuizStatusContext.Provider value={quizStatus}>
      <QuizStatusActionContext.Provider value={quizStatusAction}>
        {children}
      </QuizStatusActionContext.Provider>
    </QuizStatusContext.Provider>
  );
}

const quizStatusReducer = (
  quizStatus: QuizStatus,
  action: QuizStatusActionReducer
) => {
  switch (action.type) {
    case "changed_isOptionsClicked":
      return {
        ...quizStatus,
        isOptionsClicked: action.isOptionsClicked,
      };

    case "changed_isCorrect":
      return {
        ...quizStatus,
        isCorrect: action.isCorrect,
      };

    case "toggle_isShowChooseSurah":
      return {
        ...quizStatus,
        isShowChoosenSurah: !quizStatus.isShowChoosenSurah,
      };

    case "toggle_isShowNumberOfQuestions":
      return {
        ...quizStatus,
        isShowNumberOfQuestions: !quizStatus.isShowNumberOfQuestions,
      };

    case "toggle_isQuizStart":
      return {
        ...quizStatus,
        isQuizStart: !quizStatus.isQuizStart,
      };

    case "toggle_isQuizEnd":
      return {
        ...quizStatus,
        isQuizEnd: !quizStatus.isQuizEnd,
      };

    case "toggle_isDisabled":
      return {
        ...quizStatus,
        isDisabled: !quizStatus.isDisabled,
      };

    case "toggle_isOptionClicked":
      return {
        ...quizStatus,
        isOptionClicked: !quizStatus.isOptionClicked,
      };

    default:
      throw new Error(`Action with type ${action.type} invalid`);
  }
};
