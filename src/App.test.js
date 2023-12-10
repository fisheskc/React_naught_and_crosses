import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("App component", () => {
	test("react test heading", () => {
		render(<App />);
		expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
			/my react test/i
		);
	});

	test("a react project heading", () => {
		render(<App />);

		const button = screen.getByRole("button", { name: "Update Heading" });
		userEvent.click(button);

		expect(screen.getByRole("heading")).toHaveTextContent(/a react project/i);
	});
});
