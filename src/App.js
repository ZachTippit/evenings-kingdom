import './App.css';
import { Home, Listen, Extra, Art, Publish, Subscribe, Navbar, Footer} from './Components'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000'
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/evenings-kingdom/' element={<Home/>} />
          <Route path='/evenings-kingdom/listen' element={<Listen/>} />
          <Route path='/evenings-kingdom/extra' element={<Extra/>} />
          <Route path='/evenings-kingdom/art' element={<Art/>} />
          <Route path='/evenings-kingdom/publish' element={<Publish/>} />
          <Route path='/evenings-kingdom/subscribe' element={<Subscribe/>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;