import { Container, createTheme, ThemeProvider } from '@mui/material';
import { amber, grey, red } from '@mui/material/colors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/header';
import AboutPage from './Pages/About';
import GalleryPage from './Pages/Gallery';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
  ,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Container maxWidth="lg">
        <Header />
          <Routes>

          
          
          <Route path='/' element={<GalleryPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route
            path="*"
            element={
              <div style={{ padding: "2rem" }}>
                <h2>Error Page Not Found</h2>
              </div>
            }
          />
          </Routes>

        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
