import { useEffect, useReducer } from "react";
import { cn, getSurah } from "./ts/util";
import { MyGlobalContext, initialState } from "./ts/context";
import { reducer } from "./ts/reducer";
import OpeningQuiz from "./components/opening-quiz";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { surah, choosenSurah, numberOfQuestions } = state;
  const initialDispatchValue = {
    type: "",
    newSurah: surah,
    nextChoosenSurah: choosenSurah,
    nextNumberOfQuestions: numberOfQuestions,
  };

  useEffect(() => {
    getSurah((data) => {
      dispatch({
        ...initialDispatchValue,
        type: "changed_surah",
        newSurah: data,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MyGlobalContext.Provider value={{ state, dispatch, initialDispatchValue }}>
      <main
        className={cn(
          "min-h-screen min-w-[100vw]",
          "flex justify-center items-center",
          "text-center"
        )}
      >
        <OpeningQuiz />
      </main>
    </MyGlobalContext.Provider>
  );
}

export default App;
