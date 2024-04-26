import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";
import Overlay from "./ui/overlay";
import { useGlobalContext } from "../ts/context";

const ChooseSurahDialog = () => {
  const { state, dispatch, initialDispatchValue } = useGlobalContext();
  const { surah, isShowChoosenSurah } = state;

  return (
    <Overlay isShow={isShowChoosenSurah}>
      <Card className={cn("bg-white max-w-[1000px]")}>
        <Card.H2>Choose Surah to Memorize</Card.H2>

        <div className={cn("grid grid-cols-4 gap-2")}>
          {surah.map((item) => (
            <Button
              buttonHandler={() => {
                dispatch({
                  ...initialDispatchValue,
                  type: "changed_choosenSurah",
                  nextChoosenSurah: item.englishName,
                });
                dispatch({
                  ...initialDispatchValue,
                  type: "toggle_isShowChooseSurah",
                });
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
