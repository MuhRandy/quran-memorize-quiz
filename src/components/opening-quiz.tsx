import ChooseSurahDialog from "./choose-surah-dialog";
import NumberOfQuestionsDialog from "./number-of-questions-dialog";
import Button from "./ui/button";
import Card from "./ui/card";
import { useGlobalContext } from "../ts/context";
import { cn } from "../ts/util";

const OpeningQuiz = () => {
  const { state, dispatch, initialDispatchValue } = useGlobalContext();
  const { choosenSurah, numberOfQuestions } = state;
  return (
    <Card>
      <Card.H1>Al-Qur'an Memorize Quiz</Card.H1>

      <div>
        <p>
          Welcome to my simple quiz web to help test your memorize of Qur'an.
          Please choose surah and how much number of quiz.
        </p>

        <p>Choosen Surah: {choosenSurah ? choosenSurah : "Not choosen yet"}</p>

        <p>Number of quiz: {numberOfQuestions}</p>
      </div>

      <div className={cn("flex gap-2 justify-center")}>
        <Button
          buttonHandler={() =>
            dispatch({
              ...initialDispatchValue,
              type: "toggle_isShowChooseSurah",
            })
          }
          children="Choose Surah"
        />

        <Button
          buttonHandler={() =>
            dispatch({
              ...initialDispatchValue,
              type: "toggle_isShowNumberOfQuestions",
            })
          }
          children="Choose Quiz Quantity"
        />
      </div>

      <ChooseSurahDialog />

      <NumberOfQuestionsDialog />
    </Card>
  );
};

export default OpeningQuiz;
