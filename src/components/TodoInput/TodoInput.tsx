import { type ChangeEvent, type FormEvent } from "react";
import style from "./TodoInput.module.css";
import { useState } from "react";

interface Props {
  addTask: (text: string) => void;
}
const TodoInput = ({ addTask }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
    }
  };
  return (
    <form className={style.inputForm} onSubmit={handleAddTask}>
      <label htmlFor="input" className={style.inputFormLabel}>
        Create new todo:
        <input
          className={style.inputText}
          id="input"
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
