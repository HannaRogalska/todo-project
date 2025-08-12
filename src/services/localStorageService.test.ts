import { describe, it, expect, beforeEach } from "vitest";
import { localStorageGetTasks } from "./localStorageService";

describe("localStorageGetTasks", () => {
    beforeEach(() => {
       localStorage.clear()
    })
    it("returns an empty array if localStorage is empty", () => {
        const result = localStorageGetTasks();
        expect(result).toEqual([])
    });
    it("returns an array of tasks from localStorage", () => {
        const fakeTask = JSON.stringify([
          { id: 1, text: "Test Task", isCompleted: false },
        ]);
        localStorage.setItem("tasks", fakeTask);
        const result = localStorageGetTasks();
        expect(result.length).toBe(1);
        expect(result[0].text).toBe("Test Task");

    });
    it("returns an empty array in case of a parsing error", () => {
        localStorage.setItem("tasks", "Not valid JSON")
        const result = localStorageGetTasks();
        expect(result).toEqual([])
    });
});
