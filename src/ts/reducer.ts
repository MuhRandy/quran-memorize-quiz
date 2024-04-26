import { GlobalAction, GlobalState } from "./type";

const reducer = (state: GlobalState, action: GlobalAction) => {
  const { type, newSurah, nextChoosenSurah, nextNumberOfQuestions } = action;
  const { isShowChoosenSurah, isShowNumberOfQuestions } = state;

  switch (type) {
    case "changed_surah":
      return {
        ...state,
        surah: newSurah,
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
    case "changed_choosenSurah":
      return {
        ...state,
        choosenSurah: nextChoosenSurah,
      };
    case "changed_numberOfQuestions":
      return {
        ...state,
        numberOfQuestions: nextNumberOfQuestions,
      };

    default:
      return state;
  }
};

export { reducer };
