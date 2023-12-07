import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'globalStyles.styled';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Normalize />
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </StrictMode>
);
