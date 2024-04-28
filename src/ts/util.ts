import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

async function getDataApi(getDataHandler: (data: []) => void, url: string) {
  try {
    const response = await fetch(url);
    try {
      const { data } = await response.json();

      getDataHandler(data);
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
}

const countScoreResult = (quizScore: number, numberOfQuestions: number) => {
  const result = (quizScore / numberOfQuestions) * 100;

  return result;
};

export { cn, getDataApi, countScoreResult };
