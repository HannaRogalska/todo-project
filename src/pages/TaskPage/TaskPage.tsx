import { useEffect, useState } from "react";
import { type Task } from "../../types/Task";
import {
  localStorageGetTasks,
  localStorageSetTasks,
} from "../../services/localStorageService";
import TodoInput from "../../components/TodoInput/TodoInput";
import TodoList from "../../components/TodoList/TodoList";

const TaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>(() => localStorageGetTasks());
  const saveTasks = localStorageSetTasks("tasks");
  const addTask = (text: string) => {
    const newTask = {
      text,
      id: Date.now(),
      isCompleted: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };
  const toggleCheckBox = (id: number, checked: boolean) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: checked } : task
      )
    );
  };
  const deleteTask = (id: number) => {
    const returnTasks = tasks.filter((t) => t.id !== id);
    console.log(returnTasks);
    setTasks(returnTasks);
  };
  useEffect(() => {
   saveTasks(JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <TodoInput addTask={addTask} />
      <TodoList
        tasks={tasks}
        toggleCheckBox={toggleCheckBox}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default TaskPage;
