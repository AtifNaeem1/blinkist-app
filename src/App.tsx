import {
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

import customTheme from './theme/mainTheme';
import EntrepreneurPage from './pages/Entrepreneurship/Index';
import MyLibrary from './pages/MyLibrary/Index';
import BookDetail from './pages/BookDetail/Index';
import Template from './components/templates/BlinkistTemplate';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customTheme}>
        <BrowserRouter>
          <Template>
            <Routes>
              <Route path="/" element={<MyLibrary />} />
              <Route
                path="/entrepreneurship-page"
                element={<EntrepreneurPage />}
              />
              <Route
                path="/bookDetails/:id"
                element={<BookDetail />}
              />
            </Routes>
          </Template>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
