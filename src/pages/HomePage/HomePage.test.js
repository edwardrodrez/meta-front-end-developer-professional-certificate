import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Home page", () => {
    test("renders the HomePage component", () => {
        render(<Router><HomePage /></Router>);

        const homeElement = screen.getByTestId("home-page");
        expect(homeElement).toBeInTheDocument();
    });
});