import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// components
import Home from './components/Home';
import Resume from './components/Resume';

const App = () => {
  return (
    <Router>
      <CssBaseline />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
