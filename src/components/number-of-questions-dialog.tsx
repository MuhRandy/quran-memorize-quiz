import { useGlobalContext } from "../ts/context";
import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";
import Overlay from "./ui/overlay";

const NumberOfQuestionsDialog = () => {
  const { state, dispatch, initialDispatchValue } = useGlobalContext();
  const { isShowNumberOfQuestions, numberOfQuestions } = state;

  return (
    <Overlay isShow={isShowNumberOfQuestions} className={cn("min-h-full")}>
      <Card className={cn("bg-white")}>
        <Card.H2>How much number of questions?</Card.H2>

        <input
          className={cn(
            "border-b border-black w-[50px]",
            "text-center",
            "outline-none"
          )}
          min={0}
          type="number"
          placeholder="0"
          value={numberOfQuestions}
          onChange={(event) => {
            let { value } = event.target;

            if (parseInt(value) > 100) {
              value = "100";
            }

            dispatch({
              ...initialDispatchValue,
              type: "changed_numberOfQuestions",
              nextNumberOfQuestions: isNaN(parseInt(value))
                ? 0
                : parseInt(value),
            });
          }}
        />

        <Button
          buttonHandler={() => {
            dispatch({
              ...initialDispatchValue,
              type: "toggle_isShowNumberOfQuestions",
            });
          }}
        >
          Submit
        </Button>
      </Card>
    </Overlay>
  );
};

export default NumberOfQuestionsDialog;
