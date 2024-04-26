import { createContext, useContext } from "react";
import { State } from "./type";

const initialState = {
  surah: [],
  isShowChoosenSurah: false,
  isShowNumberOfQuestions: false,
  choosenSurah: "",
  numberOfQuestions: 0,
};

const MyGlobalContext = createContext<State>({
  state: initialState,
  dispatch: () => {},
  initialDispatchValue: {
    type: "",
    newSurah: [],
    nextChoosenSurah: "",
    nextNumberOfQuestions: 0,
  },
});

const useGlobalContext = () => useContext(MyGlobalContext);

export { MyGlobalContext, useGlobalContext, initialState };
