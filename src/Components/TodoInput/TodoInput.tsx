import { useEffect, type ChangeEvent, type FormEvent } from "react";
import style from "./TodoInput.module.css";
import { useState } from "react";
interface Task{
    text: string; 
    id: number;
}
const TodoInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState<Task[]>(() => {
         try {
           const savedTasks = localStorage.getItem("tasks");
           return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
         } catch {
           return [];
         }
    });
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    };
    const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (inputValue.trim() !== "") {
        const newTask = {
          text: inputValue,
          id: Date.now(),
        };
          setTasks((prevTasks) => [...prevTasks, newTask]);
          
          setInputValue("");
          
      }
      
    };
  return (
    <form className={style.inputForm} onSubmit={handleAddTask}>
      <label>
        Create new todo:
        <input
          className={style.inputText}
          type="text"
          name="name"
          value={inputValue}
          onChange={onChangeValue}
        />
      </label>
      <input className={style.inputSubmit} type="submit" value="Submit" />
    </form>
  );
};

export default TodoInput;
