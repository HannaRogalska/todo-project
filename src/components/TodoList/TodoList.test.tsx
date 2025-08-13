import { getAllByRole, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

const tasksMock = [
  { id: 1, text: "Task 1", isCompleted: false },
  { id: 2, text: "Task 2", isCompleted: true },
];
describe("TodoList", () => {
  it("renders the task list", () => {
    render(
      <TodoList
        tasks={tasksMock}
        toggleCheckBox={() => {}}
        deleteTask={() => {}}
      />
    );
    const listItem = screen.getAllByRole("listitem");
    console.log(listItem);
    expect(listItem.length).toBe(tasksMock.length);
    expect(listItem[0]).toBeInTheDocument();
    expect(listItem[1]).toBeInTheDocument();
  });
  it("shows a message if there are no tasks", () => {
    render(
      <TodoList tasks={[]} toggleCheckBox={() => {}} deleteTask={() => {}} />
    );
    const notTasksElement = screen.getByText("No tasks available");
    expect(notTasksElement).toBeInTheDocument();
  });

  it("calls toggleCheckBox when clicking on the checkbox", async () => {
    const mockToggleCheckBox = vi.fn();
    render(
      <TodoList
        tasks={tasksMock}
        toggleCheckBox={mockToggleCheckBox}
        deleteTask={() => {}}
      />
    );
    const getListInput = screen.getAllByRole("checkbox");
    const user = userEvent.setup();
    expect(getListInput.length).toBe(tasksMock.length);
    await user.click(getListInput[0]);
    expect(mockToggleCheckBox).toBeCalledTimes(1);
    expect(mockToggleCheckBox).toBeCalledWith(
      tasksMock[0].id,
      !tasksMock[0].isCompleted
    );
  });

  it("calls DeleteTask when the delete button is clicked", async () => {
    const mockDeleteFn = vi.fn();
    render(
      <TodoList
        tasks={tasksMock}
        toggleCheckBox={() => {}}
        deleteTask={mockDeleteFn}
      />
    );
    const deleteButton = screen.getAllByRole("button");
    const user = userEvent.setup();
    expect(deleteButton.length).toBe(tasksMock.length);
    await user.click(deleteButton[0]);
    expect(mockDeleteFn).toBeCalledTimes(1);
    expect(mockDeleteFn).toBeCalledWith(tasksMock[0].id);
  });
});
