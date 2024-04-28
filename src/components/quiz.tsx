import { useGlobalContext } from "../ts/context";
import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";

const Quiz = () => {
  const { state, globalStateAction } = useGlobalContext();
  const { isQuizStart, quiz, currentQuestion, numberOfQuestions } = state;
  const { incrementCurrentQuestion, incrementQuizScore, toggleIsQuizEnd } =
    globalStateAction;

  return (
    <Card className={cn({ hidden: !isQuizStart })}>
      <Card.H1>
        Memorize Qur'an Quiz {currentQuestion + 1}/{numberOfQuestions}
      </Card.H1>

      <p className="font-quranic text-xl">{quiz[currentQuestion]?.question}</p>

      <div className="flex flex-col gap-2">
        {quiz[currentQuestion]?.options.map((option, index) => (
          <Button
            className={cn("font-quranic text-inherit text-lg", "bg-inherit", [
              "hover:text-teal-800",
              "hover:border-teal-800",
            ])}
            children={option.text}
            key={index}
            buttonHandler={() => {
              if (currentQuestion + 1 < numberOfQuestions) {
                incrementCurrentQuestion();

                if (option.value) {
                  incrementQuizScore();
                }
              } else {
                toggleIsQuizEnd();
              }
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default Quiz;
