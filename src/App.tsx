import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './default-theme';
import { GlobalStyles } from './config/global-styles';
import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
