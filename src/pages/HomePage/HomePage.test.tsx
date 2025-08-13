import { describe, it, expect, vi } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from "./HomePage";
import TaskPage from "../TaskPage/TaskPage";

describe("HomePage", () => {
  it("navigates to /tasks when Go to button is clicked", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </MemoryRouter>
    );
    const user = userEvent.setup();
    const button = screen.getByText("Go to");
    await user.click(button);
    const notTaskText = screen.getByText("No tasks available");
    expect(notTaskText).toBeInTheDocument();
  });
});
