import { ReactNode } from "react";

type DefaultProps = {
  children: ReactNode;
  className?: string;
};

type SurahProps = {
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}[];

type QuizProps = {
  question: string;
  options: {
    text: string;
    value: number;
  }[];
}[];

type GlobalActionType =
  | "changed_surah"
  | "changed_choosenSurah"
  | "changed_choosenSurahNumber"
  | "changed_numberOfQuestions"
  | "changed_quiz"
  | "changed_isCorrect"
  | "changed_isOptionsClicked"
  | "toggle_isQuizStart"
  | "toggle_isQuizEnd"
  | "toggle_isShowChooseSurah"
  | "toggle_isShowNumberOfQuestions"
  | "toggle_isDisabled"
  | "toggle_isOptionClicked"
  | "increment_currentQuestion"
  | "increment_quizScore"
  | "reset_quiz"
  | "";

type GlobalStateActionProps =
  | {
      changeQuiz: (newQuiz: QuizProps) => void;
      changeSurah: (newSurah: SurahProps) => void;
      changeChoosenSurah: (nextChoosenSurah: string) => void;
      changeChoosenSurahNumber: (nextChoosenSurahNumber: number) => void;
      changeNumberOfQuestions: (nextNumberOfQuestions: number) => void;
      changeIsOptionsClicked: (isOptionsClicked: boolean[]) => void;
      changeIsCorrect: (isCorrect: boolean) => void;
      toggleIsShowChooseSurah: () => void;
      toggleIsShowNumberOfQuestions: () => void;
      toggleIsQuizStart: () => void;
      toggleIsQuizEnd: () => void;
      toggleIsDisabled: () => void;
      toggleIsOptionClicked: () => void;
      incrementCurrentQuestion: () => void;
      incrementQuizScore: () => void;
      resetQuiz: () => void;
      resetIsOptionsClicked: () => void;
    }
  | Record<string, never>;

type GlobalContextProps = {
  state: GlobalState;
  globalStateAction: GlobalStateActionProps;
};

type GlobalAction = {
  type: GlobalActionType;
  newSurah: SurahProps;
  newQuiz: QuizProps;
  nextChoosenSurah: string;
  nextChoosenSurahNumber: number;
  nextNumberOfQuestions: number;
  nextIsOptionsClicked: boolean[];
  nextIsCorrect: boolean;
};

type GlobalState = {
  surah: SurahProps | [];
  quiz: QuizProps | [];
  isShowChoosenSurah: boolean;
  isShowNumberOfQuestions: boolean;
  isQuizStart: boolean;
  isQuizEnd: boolean;
  isCorrect: boolean;
  isDisabled: boolean;
  isOptionsClicked: boolean[];
  isOptionClicked: boolean;
  choosenSurah: string;
  choosenSurahNumber: number;
  numberOfQuestions: number;
  currentQuestion: number;
  quizScore: number;
};

export type {
  DefaultProps,
  GlobalContextProps,
  SurahProps,
  QuizProps,
  GlobalAction,
  GlobalStateActionProps,
  GlobalState,
};
