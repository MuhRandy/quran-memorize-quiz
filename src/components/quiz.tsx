import { useGlobalContext } from "../ts/context";
import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";

const Quiz = () => {
  const { state, globalStateAction } = useGlobalContext();
  const { isQuizStart, quiz, currentQuestion, numberOfQuestions } = state;
  const { incrementCurrentQuestion, incrementQuizScore } = globalStateAction;

  return (
    <Card className={cn({ hidden: !isQuizStart })}>
      <Card.H1>
        Memorize Qur'an Quiz {currentQuestion + 1}/{numberOfQuestions}
      </Card.H1>

      <p>{quiz[currentQuestion]?.question}</p>

      <div className="flex flex-col gap-2">
        {quiz[currentQuestion]?.options.map((option, index) => (
          <Button
            children={option.text}
            key={index}
            buttonHandler={() => {
              if (currentQuestion + 1 < numberOfQuestions) {
                incrementCurrentQuestion();

                if (option.value) {
                  incrementQuizScore();
                }
              }
            }}
          />
        ))}
      </div>
    </Card>
  );
};

export default Quiz;
