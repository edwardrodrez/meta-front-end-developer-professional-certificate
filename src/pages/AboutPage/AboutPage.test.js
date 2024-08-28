import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import AboutPage from "./AboutPage";

describe("About page", () => {
    test("renders the AboutPage component", () => {
        render(<Router><AboutPage /></Router>);

        const aboutElement = screen.getByTestId("about-page");
        expect(aboutElement).toBeInTheDocument();
    });
});