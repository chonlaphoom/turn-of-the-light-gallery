import { Container, createTheme, ThemeProvider } from '@mui/material';
import { amber, grey, red } from '@mui/material/colors';
import './App.css';
import Header from './Header/header';
 
const theme = createTheme({
  palette: {
   mode:'dark'
  }
,
});

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <ThemeProvider theme={theme}><Header></Header></ThemeProvider>
        <header>
          my gallery
        </header>
      </Container>
    </div>
  );
}

export default App;
