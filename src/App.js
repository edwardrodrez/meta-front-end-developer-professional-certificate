
import './App.css';
import Layout from './layouts/Layout/Layout';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';

function App() {
  return (
    <div className=''>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
