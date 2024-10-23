import { useEffect, useState } from "react";
import classes from "./Result.module.css";

export default function Result({ answers, resetHandler }) {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    console.log(answers);
    answers.map((answer) => {
      if (answer.correct != undefined) {
        setCorrectAnswers((prevValue) => prevValue + 1);
      }
    });
  }, []);

  return (
    <div className={classes.result}>
      <h3>
        تعداد جواب صحیح : {correctAnswers} <br />
        تعداد کل سوالات : {answers.length}
      </h3>
      <button onClick={resetHandler}>Return</button>
    </div>
  );
}
