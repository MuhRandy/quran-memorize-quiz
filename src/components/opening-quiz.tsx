import ChooseSurahDialog from "./choose-surah-dialog";
import NumberOfQuestionsDialog from "./number-of-questions-dialog";
import Button from "./ui/button";
import Card from "./ui/card";
import { cn } from "../ts/util";
import {
  useQuizStatusActionContext,
  useQuizStatusContext,
} from "../services/state/QuizStatusContext";
import { useQuizContext } from "../services/state/QuizContext";

const OpeningQuiz = () => {
  const { choosenSurah, numberOfQuestions, quiz } = useQuizContext();
  const { isQuizStart } = useQuizStatusContext();

  const {
    toggleIsShowChooseSurah,
    toggleIsShowNumberOfQuestions,
    toggleIsQuizStart,
  } = useQuizStatusActionContext();
  return (
    <Card className={cn("mx-4", { hidden: isQuizStart })}>
      <Card.H1>Al-Qur'an Memorize Quiz</Card.H1>

      <div>
        <p>
          Welcome to my simple quiz web to help test your memorize of Qur'an.
          Please choose surah and how much number of quiz.
        </p>

        <p>Choosen Surah: {choosenSurah ? choosenSurah : "Not choosen yet"}</p>

        <p>Number of quiz: {numberOfQuestions}</p>
      </div>

      <div className="flex flex-col gap-2">
        <div className={cn("flex gap-2 justify-center")}>
          <Button
            className="flex-1"
            buttonHandler={() => toggleIsShowChooseSurah()}
            children="Choose Surah"
          />

          <Button
            className="flex-1"
            buttonHandler={() => toggleIsShowNumberOfQuestions()}
            children="Choose Quiz Quantity"
          />
        </div>

        <Button
          children="Start Quiz"
          className={cn({ hidden: quiz.length === 0 })}
          buttonHandler={() => {
            toggleIsQuizStart();
          }}
        />
      </div>

      <ChooseSurahDialog />

      <NumberOfQuestionsDialog />
    </Card>
  );
};

export default OpeningQuiz;
