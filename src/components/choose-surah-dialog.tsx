import { cn } from "../ts/util";
import Button from "./ui/button";
import Card from "./ui/card";
import Overlay from "./ui/overlay";
import { useGlobalContext } from "../ts/context";

const ChooseSurahDialog = () => {
  const { state, globalStateAction } = useGlobalContext();
  const { surah, isShowChoosenSurah } = state;
  const {
    changeChoosenSurah,
    changeChoosenSurahNumber,
    toggleIsShowChooseSurah,
  } = globalStateAction;

  return (
    <Overlay isShow={isShowChoosenSurah}>
      <Card className={cn("bg-white max-w-[1000px]")}>
        <Card.H2>Choose Surah to Memorize</Card.H2>

        <div className={cn("grid grid-cols-4 gap-2")}>
          {surah.map((item) => (
            <Button
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
