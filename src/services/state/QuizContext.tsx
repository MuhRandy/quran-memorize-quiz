import { createContext, useContext, useEffect, useReducer } from "react";
import { DefaultProps, QuizProps, SurahProps } from "../../ts/type";
import { getDataApi, getQuiz } from "../../ts/util";

type Quiz = {
  surah: SurahProps | [];
  quiz: QuizProps | [];
  choosenSurah: string;
  choosenSurahNumber: number;
  numberOfQuestions: number;
  currentQuestion: number;
  quizScore: number;
};

type QuizActionReducer =
  | {
      type: "changed_surah";
      surah: SurahProps;
    }
  | {
      type: "changed_choosenSurah";
      choosenSurah: string;
    }
  | {
      type: "changed_choosenSurahNumber";
      choosenSurahNumber: number;
    }
  | {
      type: "changed_numberOfQuestions";
      numberOfQuestions: number;
    }
  | {
      type: "changed_quiz";
      quiz: QuizProps;
    }
  | { type: "increment_currentQuestion" }
  | { type: "increment_quizScore" }
  | { type: "reset_quiz" }
  | Record<string, never>
  | { type: "" };

type QuizAction =
  | {
      changeQuiz: (newQuiz: QuizProps) => void;
      changeSurah: (newSurah: SurahProps) => void;
      changeChoosenSurah: (nextChoosenSurah: string) => void;
      changeChoosenSurahNumber: (nextChoosenSurahNumber: number) => void;
      changeNumberOfQuestions: (nextNumberOfQuestions: number) => void;
      incrementCurrentQuestion: () => void;
      incrementQuizScore: () => void;
      resetQuiz: () => void;
    }
  | Record<string, never>;

const initialQuiz: Quiz = {
  surah: [],
  quiz: [],
  choosenSurah: "",
  choosenSurahNumber: 0,
  numberOfQuestions: 0,
  currentQuestion: 0,
  quizScore: 0,
};

const QuizContext = createContext<Quiz>(initialQuiz);
const QuizActionContext = createContext<QuizAction>({});

export function useQuizContext() {
  return useContext(QuizContext);
}

export function useQuizActionContext() {
  return useContext(QuizActionContext);
}

export function QuizProvider({ children }: DefaultProps) {
  const [quiz, dispatch] = useReducer(quizReducer, initialQuiz);

  const { numberOfQuestions, choosenSurahNumber } = quiz;

  const changeSurah = (newSurah: SurahProps) => {
    dispatch({
      type: "changed_surah",
      surah: newSurah,
    });
  };

  const changeQuiz = (newQuiz: QuizProps) => {
    dispatch({
      type: "changed_quiz",
      quiz: newQuiz,
    });
  };

  const changeChoosenSurah = (newChoosenSurah: string) => {
    dispatch({
      type: "changed_choosenSurah",
      choosenSurah: newChoosenSurah,
    });
  };

  const changeChoosenSurahNumber = (newChoosenSurahNumber: number) => {
    dispatch({
      type: "changed_choosenSurahNumber",
      choosenSurahNumber: newChoosenSurahNumber,
    });
  };

  const changeNumberOfQuestions = (newNumberOfQuestions: number) => {
    dispatch({
      type: "changed_numberOfQuestions",
      numberOfQuestions: newNumberOfQuestions,
    });
  };

  const incrementCurrentQuestion = () => {
    dispatch({
      type: "increment_currentQuestion",
    });
  };

  const incrementQuizScore = () => {
    dispatch({
      type: "increment_quizScore",
    });
  };

  const resetQuiz = () => {
    dispatch({
      type: "reset_quiz",
    });
  };

  const quizAction = {
    changeQuiz,
    changeSurah,
    changeChoosenSurah,
    changeChoosenSurahNumber,
    changeNumberOfQuestions,
    incrementCurrentQuestion,
    incrementQuizScore,
    resetQuiz,
  };

  useEffect(() => {
    getDataApi((data) => {
      changeSurah(data);
    }, "http://api.alquran.cloud/v1/surah");
  }, []);

  useEffect(() => {
    if (choosenSurahNumber !== 0 && numberOfQuestions !== 0) {
      getQuiz(numberOfQuestions, [choosenSurahNumber], changeQuiz);
    }
  }, [choosenSurahNumber, numberOfQuestions]);

  return (
    <QuizContext.Provider value={quiz}>
      <QuizActionContext.Provider value={quizAction}>
        {children}
      </QuizActionContext.Provider>
    </QuizContext.Provider>
  );
}

const quizReducer = (quiz: Quiz, action: QuizActionReducer) => {
  switch (action.type) {
    case "changed_surah":
      return {
        ...quiz,
        surah: action.surah,
      };

    case "changed_quiz":
      return {
        ...quiz,
        quiz: action.quiz,
      };

    case "changed_choosenSurah":
      return {
        ...quiz,
        choosenSurah: action.choosenSurah,
      };

    case "changed_choosenSurahNumber":
      return {
        ...quiz,
        choosenSurahNumber: action.choosenSurahNumber,
      };

    case "changed_numberOfQuestions":
      return {
        ...quiz,
        numberOfQuestions: action.numberOfQuestions,
      };

    case "increment_currentQuestion":
      return {
        ...quiz,
        currentQuestion: quiz.currentQuestion + 1,
      };

    case "increment_quizScore":
      return {
        ...quiz,
        quizScore: quiz.quizScore + 1,
      };

    case "reset_quiz":
      return {
        ...quiz,
        quiz: [],
        choosenSurah: "",
        choosenSurahNumber: 0,
        numberOfQuestions: 0,
        currentQuestion: 0,
        quizScore: 0,
      };

    default:
      throw new Error(`Action type ${action.type} invalid!`);
  }
};
