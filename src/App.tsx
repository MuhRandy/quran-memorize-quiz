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

  const {
    surah,
    quiz,
    choosenSurah,
    choosenSurahNumber,
    numberOfQuestions,
    isOptionsClicked,
    isCorrect,
  } = state;
  const initialDispatchValue: GlobalAction = {
    type: "",
    newSurah: surah,
    newQuiz: quiz,
    nextChoosenSurah: choosenSurah,
    nextChoosenSurahNumber: choosenSurahNumber,
    nextNumberOfQuestions: numberOfQuestions,
    nextIsOptionsClicked: isOptionsClicked,
    nextIsCorrect: isCorrect,
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

  const changeIsOptionsClicked = (nextIsOptionsClicked: boolean[]) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_isOptionsClicked",
      nextIsOptionsClicked,
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

  const changeIsCorrect = (nextIsCorrect: boolean) => {
    dispatch({
      ...initialDispatchValue,
      type: "changed_isCorrect",
      nextIsCorrect,
    });
  };

  const toggleIsDisabled = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isDisabled",
    });
  };

  const toggleIsOptionClicked = () => {
    dispatch({
      ...initialDispatchValue,
      type: "toggle_isOptionClicked",
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

  const resetIsOptionsClicked = () => {
    const newArr = [false, false, false, false];

    dispatch({
      ...initialDispatchValue,
      type: "changed_isOptionsClicked",
      nextIsOptionsClicked: newArr,
    });
  };

  const globalStateAction: GlobalStateActionProps = {
    changeQuiz,
    changeSurah,
    changeChoosenSurah,
    changeChoosenSurahNumber,
    changeNumberOfQuestions,
    changeIsOptionsClicked,
    changeIsCorrect,
    toggleIsShowChooseSurah,
    toggleIsShowNumberOfQuestions,
    toggleIsQuizStart,
    toggleIsQuizEnd,
    toggleIsDisabled,
    toggleIsOptionClicked,
    incrementCurrentQuestion,
    incrementQuizScore,
    resetQuiz,
    resetIsOptionsClicked,
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
          "text-center"
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
