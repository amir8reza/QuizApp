import { useContext, useEffect, useRef, useState } from "react";
import { questions } from "../data/questions";
import { TimeContext } from "../context/timeContext";
import classes from "./Quiz.module.css";

export default function Quiz({ stageHandler, answerHandler }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionState, setQuestionState] = useState(questions[questionIndex]);
  const tContext = useContext(TimeContext);
  const timeRef = useRef(tContext.time);

  function saveAnswer(answer, event) {
    answerHandler(answer);
    nextQuestion();
  }

  function nextQuestion() {
    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
      tContext.setTime(timeRef.current);
    } else {
      stageHandler("result");
    }
  }

  useEffect(() => {
    setQuestionState({
      ...questions[questionIndex],
      answers: questions[questionIndex].answers.sort(() => Math.random() - 0.5),
    });
  }, [questionIndex]);

  useEffect(() => {
    const quizTimer = setTimeout(() => {
      if (tContext.time > 1) {
        tContext.setTime((currentTime) => currentTime - 1);
      } else {
        answerHandler(null, null);
        nextQuestion();
      }
    }, 1000);

    return () => {
      clearTimeout(quizTimer);
    };
  }, [tContext.time]);

  return (
    <div className={classes.quizSection}>
      <h2>{tContext.time}</h2>
      <input type="range" value={tContext.time} min={0} max={timeRef.current} />
      <h3> {questionState.question} </h3>
      <ul>
        {questionState.answers.map((answer, index) => (
          <li key={index} onClick={(event) => saveAnswer(answer, event)}>
            {answer.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
