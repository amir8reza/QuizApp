import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import MainMenu from "./components/MainMenu/MainMenu";
import { TimeContext } from "./context/timeContext";

function App() {
  const [stage, setStage] = useState("menu");
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  function stageHandler(nextStage) {
    setStage(nextStage);
  }

  function saveAnswer(answer) {
    setAnswers((prevAnswers) => {
      return [
        ...prevAnswers,
        {
          ...answer,
        },
      ];
    });
  }

  function resetHandler() {
    setAnswers([]);
    setStage("menu");
  }

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      <div className="container">
        {stage === "menu" && <MainMenu stageHandler={stageHandler} />}
        {stage === "quiz" && (
          <Quiz stageHandler={stageHandler} answerHandler={saveAnswer} />
        )}
        {stage === "result" && (
          <Result resetHandler={resetHandler} answers={answers} />
        )}
      </div>
    </TimeContext.Provider>
  );
}

export default App;
