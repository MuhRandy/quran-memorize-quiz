import { DefaultProps } from "../../ts/type";
import { QuizProvider } from "./QuizContext";
import { QuizStatusProvider } from "./QuizStatusContext";

function AppProvider({ children }: DefaultProps) {
  return (
    <QuizProvider>
      <QuizStatusProvider>{children}</QuizStatusProvider>
    </QuizProvider>
  );
}

export default AppProvider;
