import classes from "./MainMenu.module.css";
import QuizCard from "./QuizCard";

export default function MainMenu({ stageHandler }) {
  return (
    <div className={classes.mainmenu}>
      <QuizCard time={5} level={"سخت"} stageHandler={stageHandler} />
      <QuizCard time={8} level={"متوسط"} stageHandler={stageHandler} />
      <QuizCard time={10} level={"آسان"} stageHandler={stageHandler} />
    </div>
  );
}
