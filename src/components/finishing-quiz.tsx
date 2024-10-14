import {
  useQuizActionContext,
  useQuizContext,
} from "../services/state/QuizContext";
import {
  useQuizStatusActionContext,
  useQuizStatusContext,
} from "../services/state/QuizStatusContext";
import { countScoreResult } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";
import Overlay from "./ui/overlay";

const FinishingQuiz = () => {
  const { quizScore, numberOfQuestions } = useQuizContext();
  const { isQuizEnd } = useQuizStatusContext();

  const { resetQuiz } = useQuizActionContext();
  const { toggleIsQuizEnd, toggleIsQuizStart } = useQuizStatusActionContext();

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
