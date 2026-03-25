import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SymptomChecker from './pages/SymptomChecker';
import Results from './pages/Results';

import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/checker" element={<SymptomChecker />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
