import {
  useQuizActionContext,
  useQuizContext,
} from "../services/state/QuizContext";
import {
  useQuizStatusActionContext,
  useQuizStatusContext,
} from "../services/state/QuizStatusContext";
import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";

const Quiz = () => {
  const {
    isQuizStart,
    isOptionsClicked,
    isOptionClicked,
    isDisabled,
    isCorrect,
  } = useQuizStatusContext();
  const { quiz, currentQuestion, numberOfQuestions } = useQuizContext();

  const {
    toggleIsQuizEnd,
    toggleIsDisabled,
    toggleIsOptionClicked,
    changeIsCorrect,
    changeIsOptionsClicked,
    resetIsOptionsClicked,
  } = useQuizStatusActionContext();

  const { incrementCurrentQuestion, incrementQuizScore } =
    useQuizActionContext();

  return (
    <Card className={cn({ hidden: !isQuizStart })}>
      <Card.H1>
        Memorize Qur'an Quiz {currentQuestion + 1}/{numberOfQuestions}
      </Card.H1>

      <p>Guess the next verse of ayah below</p>

      <p className="font-quranic text-xl">{quiz[currentQuestion]?.question}</p>

      <p
        className={cn("px-2 rounded-md", {
          "bg-red-400": !isCorrect && isOptionClicked,
          "bg-green-400": isCorrect && isOptionClicked,
          hidden: !isOptionClicked,
        })}
      >
        {isCorrect ? "Correct" : "Incorrect"}
      </p>

      <div className="flex flex-col gap-2">
        {quiz[currentQuestion]?.options.map((option, index) => (
          <Button
            key={index}
            children={option.text}
            isDisabled={isDisabled}
            className={cn("font-quranic text-inherit text-lg", "bg-inherit", {
              "cursor-not-allowed": isDisabled,
              "bg-green-400 hover:bg-green-400":
                option.value && isOptionClicked,
              "bg-red-400 hover:bg-red-400":
                !option.value && isOptionsClicked[index],
              ["hover:border-teal-800 hover:text-teal-800"]: !isDisabled,
            })}
            buttonHandler={() => {
              if (option.value) {
                incrementQuizScore();
                changeIsCorrect(true);
              }

              const newArr = isOptionsClicked;
              newArr[index] = true;

              changeIsOptionsClicked(newArr);
              toggleIsDisabled();
              toggleIsOptionClicked();
            }}
          />
        ))}
      </div>

      <Button
        className={cn({
          hidden: !isOptionClicked,
        })}
        buttonHandler={() => {
          if (currentQuestion + 1 < numberOfQuestions) {
            incrementCurrentQuestion();
          } else {
            toggleIsQuizEnd();
          }

          resetIsOptionsClicked();
          toggleIsDisabled();
          toggleIsOptionClicked();
          changeIsCorrect(false);
        }}
      >
        Next Questions
      </Button>
    </Card>
  );
};

export default Quiz;
