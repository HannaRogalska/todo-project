import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import userEvent from "@testing-library/user-event";

describe("TodoInput", () => {
  it("it is rendered with an empty input", () => {
    render(<TodoInput addTask={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
  });
  it("calls addTask with text when submitting", async () => {
    const addTaskMock = vi.fn();
    render(<TodoInput addTask={addTaskMock} />);
    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.type(input, "New task");
    await user.click(button);
    expect(addTaskMock).toHaveBeenCalledTimes(1);
    expect(addTaskMock).toHaveBeenCalledWith("New task");
  });
  it("does not call addTask if the input is empty", async () => {
    const addTaskMock = vi.fn();
    render(<TodoInput addTask={addTaskMock} />);
    const button = screen.getByRole("button");
    const user = userEvent.setup();
    await user.click(button);
    expect(addTaskMock).toHaveBeenCalledTimes(0);
  });
});
