import { createContext, useContext } from "react";
import { GlobalContextProps, GlobalState } from "./type";

const initialState: GlobalState = {
  surah: [],
  quiz: [],
  isShowChoosenSurah: false,
  isShowNumberOfQuestions: false,
  isQuizStart: false,
  isQuizEnd: false,
  isCorrect: false,
  isDisabled: false,
  isOptionClicked: false,
  isOptionsClicked: [false, false, false, false],
  choosenSurah: "",
  choosenSurahNumber: 0,
  numberOfQuestions: 0,
  currentQuestion: 0,
  quizScore: 0,
};

const MyGlobalContext = createContext<GlobalContextProps>({
  state: initialState,
  globalStateAction: {},
});

const useGlobalContext = () => useContext(MyGlobalContext);

export { MyGlobalContext, useGlobalContext, initialState };
