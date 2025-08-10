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
    <ol className={style.todoList}>
      {tasks && tasks.length !== 0 ? (
        tasks.map((t) => (
          <li key={t.id}>
            <div className={style.todoItemBox}>
              <p
                className={`${t.isCompleted ? style.completed : ""} ${
                  style.todoItemText
                }`}
              >
                {t.text}
              </p>
              <input type="checkbox" onChange={handleChange(t.id)} />
              <Button text="Delate" btnFunction={() => deleteTask(t.id)} />
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
