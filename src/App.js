import React from 'react';

// components
import Nav from './components/Nav';
import About from './components/About';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
