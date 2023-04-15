import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './page1';
import QuizApp from './QuizApp';
import Countries from './Components/Countries';


function RouteManager() {
  return (
    <Routes>
      <Route exact path="*" element={<Page1 />} />
      <Route exact path="/quiz-app" element={<QuizApp />} />
      <Route exact path="/countries" element={<Countries />} />

      {/* Define other routes here */}
    </Routes>
  );
}

export default RouteManager;
