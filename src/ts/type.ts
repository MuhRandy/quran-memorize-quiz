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
  | "toggle_isQuizStart"
  | "toggle_isShowChooseSurah"
  | "toggle_isShowNumberOfQuestions"
  | "increment_currentQuestion"
  | "increment_quizScore"
  | "";

type GlobalStateActionProps =
  | {
      changeQuiz: (newQuiz: QuizProps) => void;
      changeSurah: (newSurah: SurahProps) => void;
      changeChoosenSurah: (nextChoosenSurah: string) => void;
      changeChoosenSurahNumber: (nextChoosenSurahNumber: number) => void;
      changeNumberOfQuestions: (nextNumberOfQuestions: number) => void;
      toggleIsShowChooseSurah: () => void;
      toggleIsShowNumberOfQuestions: () => void;
      toggleIsQuizStart: () => void;
      incrementCurrentQuestion: () => void;
      incrementQuizScore: () => void;
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
};

type GlobalState = {
  surah: SurahProps | [];
  isShowChoosenSurah: boolean;
  isShowNumberOfQuestions: boolean;
  choosenSurah: string;
  choosenSurahNumber: number;
  numberOfQuestions: number;
  quiz: QuizProps | [];
  isQuizStart: boolean;
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
