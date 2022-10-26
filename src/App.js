import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from 'react-router-dom';
import './App.css';

// components
import Home from './components/Home';
import Resume from './components/Resume';

const App = () => {
  return (
    <>
    <CssBaseline />
      <Route exact path="/" component={Home} />
      <Route path="/resume" component={Resume} />
    </>
  );
}

export default App;
