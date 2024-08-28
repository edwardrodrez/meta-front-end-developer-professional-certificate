import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ReservationPage from "./ReservationPage";

describe("Reservation page", () => {
    test("renders the ReservationPage component", () => {
        render(<Router><ReservationPage /></Router>);

        const reservationElement = screen.getByTestId("reservation-page");
        expect(reservationElement).toBeInTheDocument();
    });
});