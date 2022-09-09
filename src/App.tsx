import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './shared/Router';
import VolcanoListPage from './Volcan/Pages/VolcanoList.page';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
