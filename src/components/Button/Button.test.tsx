import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import { describe, it, expect, vi } from "vitest";

describe("Button component", () => {
    it("displays the transmitted text", () => {
        render(<Button text="Test text" btnFunction={() => { }} />);
        const buttonElement = screen.getByText("Test text");
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent("Test text");
    });
    it("calls the function when clicked", async () => {
        const onClick = vi.fn()
        render(<Button text="Test text" btnFunction={onClick} />);
        const buttonElement = screen.getByRole("button", { name: "Test text" });
        await userEvent.click(buttonElement);

        expect(onClick).toHaveBeenCalledTimes(1);
    });
})