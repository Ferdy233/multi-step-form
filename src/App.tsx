import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StarterPage from './components/StarterPage/StarterPage';
import MultiStepForm from './components/MultiStepForm/MultiStepForm';

const App: React.FC = () => {
  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path="/" element={<StarterPage />} />
          <Route path="/signup" element={<MultiStepForm />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;