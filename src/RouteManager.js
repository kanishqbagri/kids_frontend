import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Page1 from './page1';
import QuizApp from './QuizApp';
import Countries from './Countries';
import GK from './Components/gk_home';


function RouteManager() {
  return (
    <Routes>
      <Route exact path="*" element={<Page1 />} />
      <Route exact path="/quiz-app" element={<QuizApp />} />
      <Route exact path="/countries" element={<Countries />} />
      <Route exact path="/genknowledge" element={<GK />} />

      {/* Define other routes here */}
    </Routes>
  );
}

export default RouteManager;
