// Dependencies
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Resources
import Header from './components/Header/Header';
import Routes from './components/Routes';

const App = () => (
  <>
    <Header />
    <div>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  </>
);

export default App;