import { useQuizContext } from "../services/state/QuizContext";
import { cn } from "../ts/util";
import FinishingQuiz from "./finishing-quiz";
import OpeningQuiz from "./opening-quiz";
import Quiz from "./quiz";

const MainQuiz = () => {
  const { quiz } = useQuizContext();
  return (
    <main
      className={cn(
        "mt-auto",
        "flex justify-center items-center",
        "text-center"
      )}
    >
      <OpeningQuiz />
      {quiz.length > 0 ? <Quiz /> : ""}
      <FinishingQuiz />
    </main>
  );
};

export default MainQuiz;
