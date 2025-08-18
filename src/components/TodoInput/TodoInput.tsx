import { type ChangeEvent, type FormEvent } from "react";
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
    <form
      className={
        "flex-row justify-center p-[20px] sm:flex-column md:flex-column"
      }
      onSubmit={handleAddTask}
    >
      <label htmlFor="input">
        Create new todo:
        <input
          className={
            "lg:w-[450px] text-start px-[10px]  border-2 m-[10px] border-[var(--input-bg-color)] "
          }
          id="input"
          type="text"
          name="name"
          value={inputValue}
          onChange={onChangeValue}
        />
      </label>
      <input
        className={
          "border-[var(--input-bg-color)] bg-[var(--input-bg-color)] px-8  text-white rounded-2xl hover:bg-[var(--input-bg-color-hover)]"
        }
        type="submit"
        value="Submit"
      />
    </form>
  );
};

export default TodoInput;
