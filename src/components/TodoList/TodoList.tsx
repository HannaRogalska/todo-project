import style from "./TodoList.module.css";
import type { Task } from "../../types/Task";
import Button from "../Button/Button";
interface Props {
  tasks: Task[];
  toggleCheckBox: (id: number, checked: boolean) => void;
  deleteTask: (id:number)=>void
}

const TodoList = ({ tasks, toggleCheckBox, deleteTask }: Props) => {
  const handleChange =
    (id: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      toggleCheckBox(id, e.target.checked);
      console.log(e.target.checked);
    };

  return (
    <ol className="list-decimal flex justify-center">
      {tasks && tasks.length !== 0 ? (
        tasks.map((t) => (
          <li key={t.id}>
            <div className={"flex justify-center items-center"}>
              <p
                className={`${
                  t.isCompleted ? "line-through" : ""
                } ${"m-[10px]"}`}
              >
                {t.text}
              </p>
              <input
                type="checkbox"
                checked={t.isCompleted}
                onChange={handleChange(t.id)}
              />
              <Button text="Delete" btnFunction={() => deleteTask(t.id)} />
            </div>
          </li>
        ))
      ) : (
        <p className={style.emptyMessage}>No tasks available</p>
      )}
    </ol>
  );
};

export default TodoList;
