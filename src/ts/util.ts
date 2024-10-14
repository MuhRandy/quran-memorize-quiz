import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { guessVerse } from "quran-quiz";
import { QuizProps } from "./type";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

async function getDataApi(getDataHandler: (data: []) => void, url: string) {
  try {
    const response = await fetch(url);
    const { data } = await response.json();

    getDataHandler(data);
  } catch (error) {
    console.log(error);
  }
}

const countScoreResult = (quizScore: number, numberOfQuestions: number) => {
  const result = (quizScore / numberOfQuestions) * 100;

  return Math.round(result);
};

function getQuiz(
  amount: number,
  select: number[],
  getDataHandler: (data: QuizProps) => void
) {
  const quiz = guessVerse.bySurah({
    amount,
    select,
  });
  getDataHandler(quiz.data);
}

export { cn, getDataApi, countScoreResult, getQuiz };
