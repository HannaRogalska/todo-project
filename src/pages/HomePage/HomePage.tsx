import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";
import Button from "../../components/Button/Button";

const HomePage = () => {
  const navigate = useNavigate();

  const goToTasks = () => {
    navigate("./tasks");
  };
  return (
    <div className={style.homePageContainer}>
      <h1>Welcome to Your ToDo App</h1>
      <p>
        Manage your tasks efficiently and stay organized. Add new tasks, track
        progress, and never forget what’s important.
      </p>

      <p>
        This app uses modern React features including Suspense and React Router
        v6, providing a smooth and fast user experience.
      </p>
      <Button text="Go to Tasks" btnFunction={goToTasks} />
    </div>
  );
};

export default HomePage;
