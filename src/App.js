import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './pages/Pages.css';
import Header from './Components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetStartedPage from './pages/GetStartedPage';
import FreeConsultationPage from './pages/FreeConsultationPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route
              path="/free-consultation"
              element={<FreeConsultationPage />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
