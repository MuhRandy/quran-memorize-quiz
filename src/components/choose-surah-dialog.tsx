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
import Overlay from "./ui/overlay";

const ChooseSurahDialog = () => {
  const { surah } = useQuizContext();
  const { isShowChoosenSurah } = useQuizStatusContext();

  const { changeChoosenSurah, changeChoosenSurahNumber } =
    useQuizActionContext();
  const { toggleIsShowChooseSurah } = useQuizStatusActionContext();

  return (
    <Overlay isShow={isShowChoosenSurah}>
      <Card className={cn("bg-white max-w-[1000px]")}>
        <Card.H2>Choose Surah to Memorize</Card.H2>

        <div
          className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2")}
        >
          {surah.map((item) => (
            <Button
              className={cn("font-quranic text-inherit text-lg", "bg-inherit", [
                "hover:text-teal-800",
                "hover:border-teal-800",
              ])}
              buttonHandler={() => {
                changeChoosenSurah(item.englishName);

                changeChoosenSurahNumber(item.number);

                toggleIsShowChooseSurah();
              }}
              key={item.number}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </Card>
    </Overlay>
  );
};

export default ChooseSurahDialog;
