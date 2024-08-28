
import './App.css';
import Layout from './layouts/Layout/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ReservationPage from './pages/Reservation/ReservationPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
