import { Dispatch, ReactNode } from "react";

type defaultProps = {
  children: ReactNode;
  className?: string;
};

type surahProps = {
  englishName: string;
  englishNameTranslation: string;
  name: string;
  number: number;
  numberOfAyahs: number;
  revelationType: string;
}[];

type GlobalContextProps = {
  surah: surahProps | [];
  isShowChoosenSurah: boolean;
  isShowNumberOfQuestions: boolean;
  choosenSurah: string;
  numberOfQuestions: number;
};

type GlobalAction = {
  type: string;
  newSurah: surahProps;
  nextChoosenSurah: string;
  nextNumberOfQuestions: number;
};

type GlobalState = GlobalContextProps;

type State = {
  state: GlobalContextProps;
  dispatch: Dispatch<GlobalAction>;
  initialDispatchValue: GlobalAction;
};

export type {
  defaultProps,
  GlobalContextProps,
  surahProps,
  GlobalAction,
  GlobalState,
  State,
};
