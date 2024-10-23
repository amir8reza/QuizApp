import classes from "./QuizCard.module.css";
import hourglassSvg from "../../assets/svg/hourglass.svg";
import { TimeContext } from "../../context/timeContext";
import { useContext } from "react";

export default function QuizCard({ level, time, stageHandler }) {
  const contextTime = useContext(TimeContext);

  function clickHandler() {
    contextTime.setTime(time);
    stageHandler("quiz");
  }

  return (
    <div className={classes.card} onClick={clickHandler}>
      <img src={hourglassSvg} alt="hourglass.svg" />
      <h2> {level} </h2>
      <p> مهلت زمانی سوالات {time} ثانیه </p>
    </div>
  );
}
