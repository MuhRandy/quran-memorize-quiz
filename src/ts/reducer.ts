import { GlobalAction, GlobalState } from "./type";

const reducer = (state: GlobalState, action: GlobalAction) => {
  const {
    type,
    newSurah,
    newQuiz,
    nextChoosenSurah,
    nextNumberOfQuestions,
    nextChoosenSurahNumber,
  } = action;
  const {
    isShowChoosenSurah,
    isShowNumberOfQuestions,
    isQuizStart,
    currentQuestion,
    quizScore,
  } = state;

  switch (type) {
    case "changed_surah":
      return {
        ...state,
        surah: newSurah,
      };

    case "changed_quiz":
      return {
        ...state,
        quiz: newQuiz,
      };

    case "changed_choosenSurah":
      return {
        ...state,
        choosenSurah: nextChoosenSurah,
      };

    case "changed_choosenSurahNumber":
      return {
        ...state,
        choosenSurahNumber: nextChoosenSurahNumber,
      };

    case "changed_numberOfQuestions":
      return {
        ...state,
        numberOfQuestions: nextNumberOfQuestions,
      };

    case "toggle_isShowChooseSurah":
      return {
        ...state,
        isShowChoosenSurah: !isShowChoosenSurah,
      };

    case "toggle_isShowNumberOfQuestions":
      return {
        ...state,
        isShowNumberOfQuestions: !isShowNumberOfQuestions,
      };

    case "toggle_isQuizStart":
      return {
        ...state,
        isQuizStart: !isQuizStart,
      };

    case "increment_currentQuestion":
      return {
        ...state,
        currentQuestion: currentQuestion + 1,
      };

    case "increment_quizScore":
      return {
        ...state,
        quizScore: quizScore + 1,
      };

    default:
      return state;
  }
};

export { reducer };
