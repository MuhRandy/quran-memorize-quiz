import { useGlobalContext } from "../ts/context";
import { countScoreResult } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";
import Overlay from "./ui/overlay";

const FinishingQuiz = () => {
  const { state, globalStateAction } = useGlobalContext();
  const { isQuizEnd, quizScore, numberOfQuestions } = state;
  const { toggleIsQuizEnd, toggleIsQuizStart, resetQuiz } = globalStateAction;

  return (
    <Overlay isShow={isQuizEnd}>
      <Card className="bg-white mx-4">
        <Card.H1>Congratulations</Card.H1>

        <p>
          Your Score is {countScoreResult(quizScore, numberOfQuestions)}/100
        </p>

        <p>
          Your Total Correct Answer is {quizScore} from {numberOfQuestions}{" "}
          Questions
        </p>

        <Button
          buttonHandler={() => {
            toggleIsQuizEnd();

            toggleIsQuizStart();

            resetQuiz();
          }}
        >
          Go to Home
        </Button>
      </Card>
    </Overlay>
  );
};

export default FinishingQuiz;
