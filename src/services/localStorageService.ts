import { type Task } from "../types/Task"
export const localStorageGetTasks = () => {
     try {
               const savedTasks = localStorage.getItem("tasks");
               return savedTasks ? (JSON.parse(savedTasks) as Task[]) : [];
             } catch {
               return [];
             }
};
 
export const localStorageSetTasks = (name: string) => {
  let saveTimeout: ReturnType<typeof setTimeout> | null = null;
  return (json:string) => {
    if (saveTimeout) {
      clearTimeout(saveTimeout);
    }
    saveTimeout = setTimeout(() =>localStorage.setItem(name, json), 5000);
}
   
}


