import { useEffect, useReducer } from "react";
import { cn, getDataApi } from "./ts/util";
import { MyGlobalContext, initialState } from "./ts/context";
import { reducer } from "./ts/reducer";
import Quiz from "./components/quiz";
import {
  GlobalAction,
  GlobalStateActionProps,
  QuizProps,
  SurahProps,
} from "./ts/type";
import FinishingQuiz from "./components/finishing-quiz";
import OpeningQuiz from "./components/opening-quiz";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { surah, quiz, choosenSurah, choosenSurahNumber, numberOfQuestions } =
    state;
  const initialDispatchValue: GlobalAction = {
    type: "",
    newSurah: surah,
    newQuiz: quiz,
    nextChoosenSurah: choosenSurah,
    nextChoosenSurahNumber: choosenSurahNumber,
    nextNumberOfQuestions: numberOfQuestions,
  };

  const changeSurah = (newSurah: SurahProps) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_surah",
      newSurah,
    });
  };

  const changeQuiz = (newQuiz: QuizProps) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_quiz",
      newQuiz,
    });
  };

  const changeChoosenSurah = (nextChoosenSurah: string) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_choosenSurah",
      nextChoosenSurah,
    });
  };

  const changeChoosenSurahNumber = (nextChoosenSurahNumber: number) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_choosenSurahNumber",
      nextChoosenSurahNumber,
    });
  };

  const changeNumberOfQuestions = (nextNumberOfQuestions: number) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_numberOfQuestions",
      nextNumberOfQuestions,
    });
  };

  const toggleIsShowChooseSurah = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isShowChooseSurah",
    });
  };

  const toggleIsShowNumberOfQuestions = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isShowNumberOfQuestions",
    });
  };

  const toggleIsQuizStart = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isQuizStart",
    });
  };

  const toggleIsQuizEnd = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isQuizEnd",
    });
  };

  const incrementCurrentQuestion = () => {
    dispatch({
      ...initialDispatchValue,
      type: "increment_currentQuestion",
    });
  };

  const incrementQuizScore = () => {
    dispatch({
      ...initialDispatchValue,
      type: "increment_quizScore",
    });
  };

  const resetQuiz = () => {
    dispatch({
      ...initialDispatchValue,
      type: "reset_quiz",
    });
  };

  const globalStateAction: GlobalStateActionProps = {
    changeQuiz,
    changeSurah,
    changeChoosenSurah,
    changeChoosenSurahNumber,
    changeNumberOfQuestions,
    toggleIsShowChooseSurah,
    toggleIsShowNumberOfQuestions,
    toggleIsQuizStart,
    toggleIsQuizEnd,
    incrementCurrentQuestion,
    incrementQuizScore,
    resetQuiz,
  };

  useEffect(() => {
    getDataApi((data) => {
      changeSurah(data);
    }, "http://api.alquran.cloud/v1/surah");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (choosenSurahNumber !== 0 && numberOfQuestions !== 0) {
      getDataApi((data) => {
        changeQuiz(data);
      }, `https://quran.zakiego.com/api/guessVerse?by=surah&select=${choosenSurahNumber}&amount=${numberOfQuestions}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosenSurahNumber, numberOfQuestions]);

  return (
    <MyGlobalContext.Provider value={{ state, globalStateAction }}>
      <main
        className={cn(
          "min-h-screen min-w-[100vw]",
          "flex justify-center items-center",
          "text-center font-quranic"
        )}
      >
        <OpeningQuiz />

        {quiz.length > 0 ? <Quiz /> : ""}

        <FinishingQuiz />
      </main>
    </MyGlobalContext.Provider>
  );
}

export default App;
