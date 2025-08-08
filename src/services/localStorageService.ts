import { type Task } from "../types/Task"
const localStorageGetTasks = () => {
     try {
               const savedTasks = localStorage.getItem("tasks");
               return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
             } catch {
               return [];
             }
};


export default localStorageGetTasks;
