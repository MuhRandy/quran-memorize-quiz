import AppProvider from "./services/state/AppProvider";
import MainQuiz from "./components/main-quiz";

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col justify-center min-h-screen min-w-[100vw]">
        <MainQuiz />
        <footer className="text-center text-xs mt-auto">
          <p>Made with ❤ using React by Muhammad Randy</p>
          <p>
            Quiz Api from{" "}
            <a
              href="https://quran.zakiego.com/"
              className="underline cursor-pointer"
            >
              quran.zakiego.com
            </a>{" "}
            and{" "}
            <a
              href="http://api.alquran.cloud"
              className="underline cursor-pointer"
            >
              api.alquran.cloud
            </a>
          </p>
        </footer>
      </div>
    </AppProvider>
  );
}

export default App;
