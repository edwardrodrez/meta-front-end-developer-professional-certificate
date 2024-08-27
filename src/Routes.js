import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import AboutPage from "./pages/About/AboutPage";

export default function () {
    return (
        <Routes>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
        </Routes>
    );
};